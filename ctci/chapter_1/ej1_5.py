#!/usr/bin/python3
from ej1_2 import string_to_dict
from ej1_3 import replace_spaces_with_char

def is_edited(string_1, string_2):

    # checks if more than a character has been removed or added
    l1 = len(string_1) - 1
    l2 = len(string_2) - 1
    if abs(l1-l2) > 1:
        return False
    edits = 0

    # Checks if a character has been added or removed.
    if l1-l2 != 0:
        edits += 1
        replacements = 0
        for c in range(min(l1, l2)):
            if string_1[c] != string_2[c]:
                replacements += 1
        if replacements > 1:
            return False
    else:
        for i in range(l1):
            if string_1[i] != string_2[i]:
                edits += 1
    return edits <= 1


