package main

import (
	"encoding/csv"
	"fmt"
	"github.com/aws/aws-sdk-go/service/ssm"
	"github.com/aws/aws-sdk-go/session"
	"io"
	"log"
	"os"
)

func getSSMClient() {
	mySession := session.Must(session.NewSession())
	return ssm.New(mySession)
}
func createActivationForVM(string activationID, string secretID) {
	req, resp := client.CreateActivationRequest(params)
	err := req.Send()
	if err == nil { // resp is now filled
		fmt.Println(resp)
	}
}

func main() {
	args := os.Args[1:]
	file, err := os.Open(args[0])
	if err != nil {
		log.Fatalln("Could not open the file:", err)
	}
	reader := csv.NewReader(file)
	for {
		line, err := reader.Read()
		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatalln(err)
		}

		fmt.Printf("%s %s\n", line[0], line[1])
	}

}
