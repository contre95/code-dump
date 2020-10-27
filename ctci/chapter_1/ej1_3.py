#!/usr/bin/python3
from ej1_2 import string_to_dict


def replace_spaces_with_char(string,char):
    return string.replace(" ", char)

def remove_outside_spaces(string):
    i = 0
    j = len(string) - 1
    while string[i] == " " or string[j] == " ":
        if string[i]==" ":
            i+=1
        if string[j]==" ":
            j-=1
    return string[i:j+1]

def phrase_to_dict(string):
    # '''
    # :param string:
    # :return dictionary with the number of the word as a key and the word as a value
    # '''
    key = 0
    dic = {}
    for c in range(len(string)):
        if string[c] != " ":
            if not key in dic:
                dic[key] = string[c]
            else:
                dic[key]+= string[c]
            if string[c+1]==" ":
                key+=1
    return dic

def dic_to_url(dic, char):
    keys = sorted([k for k in dic.keys()])
    lista = []
    for k in keys:
        lista.append(dic[k])
    return char.join(lista)

def URLify_1(string):

    return replace_spaces_with_char(remove_outside_spaces(string), "%20")

def URLify_2(string):
    return dic_to_url(phrase_to_dict(string), "%20")


