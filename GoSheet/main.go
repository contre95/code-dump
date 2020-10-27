package main

import (
	"fmt"
	"log"
	"os"

	"google.golang.org/api/sheets/v4"
)

func readRange(sheetId string, readRange string) (*sheets.ValueRange, error) {
	srv, err := getSheetService()
	if err != nil {
		log.Fatalf("Unable to retrieve SheetService: %v ", err)
	}
	return srv.Spreadsheets.Values.Get(sheetId, readRange).Do()
}

func main() {
	args := os.Args[1:]
	resp, err := readRange(args[0], args[1])
	if err != nil {
		log.Fatalf("Unable to retrieve data from sheet: %v", err)
	}

	if len(resp.Values) == 0 {
		fmt.Println("No data found.")
	} else {
		for _, row := range resp.Values {
			// Print columns A and E, which correspond to indices 0 and 4.
			fmt.Printf("%s\n", row)
		}
	}
}
