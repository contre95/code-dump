package main

import (
	"fmt"
	"io/ioutil"
	"math/rand"
	"os"
	"strings"
	"time"
)

type deck []string

func newDeck() (cards deck){
	cards = deck{}
	num := []string{ "One", "Two", "Three", "Four"}
	suits := []string{"Ace", "Diamonds","Pics"}
	for _, n := range num{
		for _,s := range suits{
			cards = append(cards, n+" of "+s)
		}
	}
	return
}

func dealOwn(d deck, handSize int) (hand, remaining deck) {
	if len(d)< handSize{
		fmt.Println("Insuficient cards in the deck")
		return
	}
	hand = d[:handSize]
	remaining = d[handSize:]
	return
}

func (d deck) toString() string {
	return strings.Join([]string(d), ", ")
}

//func deal(d deck, handSize int)(deck, deck){
//	retu rn d[:handSize] , d[handSize:]
//}

func  (d deck) print()  {
	for i, card := range d {
		fmt.Println(i, card)
	}
}

func (d deck) saveToFile(filename string) error {
	return ioutil.WriteFile(filename, []byte(d.toString()), 0666)
}

func newDeckFromFile (filename string) deck {
	bs, err := ioutil.ReadFile(filename)
	if err != nil {
		fmt.Println("[ERROR]:", err)
		os.Exit(1)
	}
	s := strings.Split(string(bs), ", ")
	return deck(s)

}

func (d deck) shuffle () {

	source := rand.NewSource(time.Now().UnixNano())
	r := rand.New(source)
	
	for i := range d {
		newPosition := r.Intn(len(d) -1)
		d[i], d[newPosition] = d[newPosition], d[i]
	}
}