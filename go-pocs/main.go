package main

import (
	"fmt"

	"github.com/aws/aws-sdk-go-v2/service/s3"
)

func main() {
	var re s3.ResponseError
	fmt.Println(re)
}
