#!/usr/bin/python3

# Espacio O(1)
# Tiempo O(N)
def has_unique_c_0(string):
    myset = set()
    for c in string:
        if c not in myset:
            myset.add(c)
        else:
            return True
    return False

# Espacio O(N)
# Tiempo O(N)
def has_unique_c_1(string):
    sorted_string = sorted(string)
    string_length = len(string)
    for i in range(string_length-1):
        if sorted_string[i] == sorted_string[i+1]:
            return True
    return False

# Espacio O(1)
# Tiempo O(N)
def has_unique_c_2(string):
    all_ascii = [False for n in range(128)]
    for c in string:
        if all_ascii[ord(c)]:
            return False
        else:
            all_ascii[ord(c)] = True
    return True

