package main

import "testing"

func TestNewDeck( t *testing.T) {
	d := newDeck()

	if len(d) != 12 	 {
		t.Errorf("Expected value 12 but got %d", len(d))
	}
}
