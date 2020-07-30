#!/usr/bin/python3

# aabcccccaaa
def string_compression(string):
    is_compressable = False
    i = 0
    count = 0
    compresed_str = ""
    while(i<len(string)):
        while(i<len(string)-1 and string[i]==string[i+1]):
            is_compressable = True
            count += 1
            i += 1
        is_compressable += count
        compresed_str += string[i] + str(count+1)
        count = 0
        i += 1
    return compresed_str if is_compressable else string







