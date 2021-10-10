#String Split...

name='nil, nikul, hemu, yogi' #it is a string.
print(name)  #it is printing the string.
splitedString=name.split(", ")
print(splitedString) # its gonna print as an array element cause now have a multiple values.


#String join...(for better understanding see the output)..
    #using above variable..

joinedString=' and '.join(splitedString)
print(joinedString)
joinedString1=','.join(splitedString)
print(joinedString1)