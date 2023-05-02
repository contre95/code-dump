package main

import (
	"context"
	contrepc "contrepc/src"
	"flag"
	"fmt"
	"log"
	"net"
	"strings"

	"google.golang.org/grpc"
)

var port = flag.Int("port", 50051, "The gRPC server port")

type server struct {
	contrepc.UnimplementedPresenterServer
}

func (s *server) mustEmbedUnimplementedPresenterServer() {
	panic("not implemented") // TODO: Implement
}

func (s *server) Present(_ context.Context, p *contrepc.Person) (*contrepc.Person, error) {
	fmt.Printf("Receiving %s", p.GetName())
	dbPerson := contrepc.Person{
		Name:          "Random Person",
		Id:            123123,
		HasPonycopter: false,
	}
	if strings.ToLower(p.Name) == "anoux" {
		dbPerson.Name = "Contre"
	}
	fmt.Println("The Present function was called in the server")
	return &dbPerson, nil
}

func main() {
	flag.Parse()
	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("Failed to start tcp server:  %v", err)
	}
	s := grpc.NewServer()
	contrepc.RegisterPresenterServer(s, &server{})
	log.Printf("server listening at %v", listener.Addr())
	if s.Serve(listener) != nil {
		log.Fatalf("Failed to serve: %v", err)
	}

}
