#!/usr/bin/python3


# matrix = [ [1,2],
#            [3,4] ]

# matrix = [ [1,2,3],
#            [4,5,6],
#            [7,8,9] ]

# 123  741
# 456  852
# 789  963

def print_matrix(mat):
    for r in mat:
        print(r)

def rotate_matrix_left(matrix):
    print("OLD MAT: ")
    print_matrix(matrix)
    new_matrix = []
    for n in range(len(matrix)-1,-1,-1):
        print("index is:", n)
        new_row = [row[n] for row in matrix]
        new_matrix.append(new_row)
    print_matrix(new_matrix)

def rotate_matrix_right(matrix):
    print("OLD MAT: ")
    print_matrix(matrix)
    new_matrix = []
    for n in range(len(matrix)):
        new_row = []
        for i in range(len(matrix)-1,-1,-1):
            new_row.append(matrix[i][n])
        new_matrix.append(new_row)
    print_matrix(new_matrix)

# You can do it inplace with
# a = n1
# b = n2
# a = b/a
# b = b/a
# a = b.a
# and you will need to make this a recursive function iterating first the border of the matrix and then passing the rest of the matrix to the same function.