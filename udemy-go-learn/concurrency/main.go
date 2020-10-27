package main

import (
	"fmt"
	"net/http"
)

func main() {
    links := []string{
        "https://lucascontre.site",
        "http://emby.lucascontre.site",
        "https://lucaslois.io",
    }
    c := make(chan string)
    for _, link := range links {
       go checkLink(link,c)
    }
    for i := 0; i < len(links); i++ {
        fmt.Println(<-c)
    }
   // fmt.Println(<-c) // Prints the first msg to arrive
   // fmt.Println(<-c) // Prints the second msg to arrive
   // fmt.Println(<-c) // Prints the third msg to arrive
   // fmt.Println(<-c) // Hangs because is waiting for a msg to be receive to the channel
}

func checkLink(link string, c chan string) {
    _, err := http.Get(link)
    if err != nil {
        c <- link + " Link is down :("
        return
    }
    //fmt.Println(link, "is up!")
    c <- link + " Link is up :)"
    return
}
