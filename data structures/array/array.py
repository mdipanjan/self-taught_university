def array_practice():
    arr = [1,2,3,4,5,6]

    # adds element at the end of the array
    arr.append(7)
    # adds element at the specified position
    arr.insert(0, 8)
    # remove specified element provided as index
    arr.pop(0)
    # remove specified element passed as element
    arr.remove(7)
    
    print(arr)
array_practice()