#!/usr/bin/python3

def string_to_dict(string):
    """
    Takes a string and create a dic with each letter of the strings as a dict and the time it appears as its value.
    :param string:
    :return: dictionary
    """
    ```
    dict = {}
    for
    for c in string:
       if c in dict:
           dict[c]+=1
       else:
           dict[c]=1
    return dict

def is_permutation(string_a,string_b):
    dict_1 = string_to_dict(string_a)
    dict_2 = string_to_dict(string_b)
    return dict_1 == dict_2
