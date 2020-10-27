
class Node:
    def __init__(self):
        self.childs = {}
        self.end_word = False
        self.words_it_appears = 0
    def __repr__(self):
        return str(self.childs) + ' ' + str(self.words_it_appears)

    def __str__(self):
        return str(self.childs) + ' ' + str(self.words_it_appears)

class Trie:

    def __init__(self):
        self.head = Node()

    def add(self, word):
        root = self.head
        for c in word:
            if c not in root.childs:
                root.childs[c] = Node()
            root.childs[c].words_it_appears+=1
            root = root.childs[c]
            if c == word[-1]:
                root.end_word = True
        #print(self.head)

    def search(self, word):
        root = self.head
        for c in word:
            if c not in root.childs.keys():
                return False
            root = root.childs[c]
        return root.end_word

    def word_it_appears(self, parcial):
        root = self.head
        for c in parcial:
            if c not in root.childs.keys():
                return False
            root = root.childs[c]
        return root.words_it_appears

    def __repr__(self):
        return str(self.head)


# Test funcitions!
# t = Trie()
# t.add("HOLA")
# t.add("HOJO")
# t.add("HOJOTITA")
#
# print(t.search("HOLA"))
# print(t.search("HOJO"))
# print(t.search("HOJOLITA"))
# print(t.search("HOJOTITA"))
# print(t.word_it_appears("HO"))
# print(t.word_it_appears("HOJO"))