names=['nil','nilkul','hemant','aayush','yogi']

l=[]
for name in names: # just copy the names thing into l list.this is normal formula.
    l.append(name)
print(l)

lc=[]
print([name for name in names]) # this is a LISTSCOMP...



# adding the string in each list name

l=[]
for name in names:
    l.append(name+'  cool guy') #normal fromula...
print(l)

lc=[]
print([name +' cool guy' for name in names]) # LISTCOMP...


#condition in list comperhensions...
#normal
l=[]

movieAndRating={"harry potter":5, "james Bond":4, "50 dark":3, "50 Grey":4, "36 chamber":3}

for movie in movieAndRating:
    if movieAndRating[movie] > 3:
        l.append(movie)
print(l)


#List Comperhensions..
print( [movie for movie in movieAndRating if movieAndRating[movie] > 3] )
