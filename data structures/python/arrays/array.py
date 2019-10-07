def array_practice():
    arr = [1,2,3,4,5]

    # append method adds element at the end of the array
    arr.append(6)
    print(arr)
    # insert(s, i) method add element at specified position
    arr.insert(0, 8)
    print(arr)
    # pop(i) method removes element from specified position in the argument
    arr.pop(0)
    print(arr)
    # remove() method removes the element mentioned in the argument
    arr.remove(6)
    print(arr)
    # reverse method reverse's the array
    arr.reverse()
    print(arr)
    
array_practice()