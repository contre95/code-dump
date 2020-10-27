package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

func getMoonData() ([]byte, error) {

	url := "http://api.weatherapi.com/v1/astronomy.json?key=62deaba4ceb443a993a163907202510&q=-34.4870567,-58.4931792&dt=2020-10-25%0A"
	method := "GET"

	payload := strings.NewReader("{\n  \"range\": \"Sheet1!A1:D5\",\n  \"majorDimension\": \"ROWS\",\n  \"values\": [\n    [\"Item\", \"Cost\", \"Stocked\", \"Ship Date\"],\n    [\"Wheel\", \"$20.50\", \"4\", \"3/1/2016\"],\n    [\"Door\", \"$15\", \"2\", \"3/15/2016\"],\n    [\"Engine\", \"$100\", \"1\", \"3/20/2016\"],\n    [\"Totals\", \"=SUM(B2:B4)\", \"=SUM(C2:C4)\", \"=MAX(D2:D4)\"]\n  ],\n}")

	client := &http.Client{}
	req, err := http.NewRequest(method, url, payload)

	if err != nil {
		fmt.Println(err)
	}
	req.Header.Add("Content-Type", "application/json")

	res, err := client.Do(req)
	defer res.Body.Close()

	return ioutil.ReadAll(res.Body)
}
