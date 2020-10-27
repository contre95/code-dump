#!/usr/bin/python3
from ej1_2 import string_to_dict
from ej1_3 import replace_spaces_with_char

def is_permutation_palindrome(string):
    string_spacelss = replace_spaces_with_char(string,"")
    dic = string_to_dict(string_spacelss)
    count = 0
    for k, v in dic.items():
        if v%2!=0:
            count+=1
    if count>1:
        return False
    return True
