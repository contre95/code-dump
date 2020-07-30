package main

import "fmt"

func main() {
	//myDeck := newDeck()
	//myDeck.print()
	//hand1 , myDeck := dealOwn(myDeck, 5)
	//hand2 , myDeck := dealOwn(myDeck, 5)
	//hand3 , myDeck := dealOwn(myDeck, 5)
	//fmt.Println("\n")
	//hand3.print()
	//fmt.Println("\n")
	//hand1.print()
	//fmt.Println("\n")
	//hand2.print()

	nd := newDeck()
	fmt.Println(nd.saveToFile("mydeck.txt"))
	md := newDeckFromFile("mydeck.txt")
	md.print()
	md.shuffle()
	fmt.Println("                                 ")
	md.print()
}