str = 'hello world'
# len() to find string length
print(len(str))
# indexing to access elements from string
print(str[0])
# slice option [start: stop: step]
print(str[0:5])

# reverse the string
rev = str[::-1]
print(rev)

#strings are immutable
# new = str[0] = 'y'
# print(new)
# error

#loop through a string

stri = 'abcdefgh'

for i in range(len(stri)):
    if stri[i] == 'i' or stri[i] == 'j':
        print('There is an i or j')
