#Integer
#String
#Float
#Boolean
#Lists
#Tuple
#Sets
a="Nil Rajpurohit"
b=23
c=23.40
d=True
e=['nil','nikul','hemu']


print(a)
print()
print(b)
print()
print(c)
print()
print(d)
print()
print(e)


#Lists... datatype
list=[1,1.36,'Nil Rajp',True]

print(list[0])
print(list[1])
print(list[2])
print(list[3])
print(list) #whole List gone print.



#Some funtion OR method for list..
names=['nil','nikul','hemant','aayush']

names.append('yogita') #append(para) method use to add item at the last index in the list.
print(names)

names.insert(0,'naina') #insert(indaex,item) method use to add item by given index as a parameter.
print(names)

names.remove('naina')#remove(item) method use to remove the item from the list.
print(names)

names.reverse()#reverse() method use to reverse the odd od list items
print(names)

names.sort()#sort() method is use to sort the list in ascending order.
print(names)

#as below for loop is used it is called Iterable.. in programming world.

for name in names:       # this for loop go all over item in the list, [name] is nothing but a single item in [names] list.
    print(name)

numbers=[1,1,1,2,2,3,3,4,5]
print(set(numbers)) # to ignore the duplicate value then use set() method.and covert lists datatype into Sets datatype



#Tuple... datatype
# Tuple in Python (DataType)..
num=(1,2,3,4) # this is tuple dataType a kind of list[] but for tuple use () parenthises.
print(num)
print(num[1])

#pack of tuple can create a list...
user1=(101,'nil','nagar') #this is tuple
user2=(102,'hemu','vambori')# this is tuple

users=[user1,user2] #this is list
print(users)

#unpackaging tuple...
person1=('nil',21,'pavbhaji')

name,age,favfood =person1 #unpacking things...
print(name)
print(age)
print(favfood)
print() #for next blank line.

person2=('hemu',21,'bhel')
person3=('nilkul',24,'chinese')

people=[person1,person2,person3] #its a list.
for name,age,favfood in people:
    print(name)
    print(age)
    print(favfood)
    print()




#Sets... datatype
#it is random order.there in no index value.
#it cant have duplicate values.

s={'blueberry','rasberry'}
print(s)

s.add('straweberry')
print(s)

s.add('blueberry') #cant add duplicate value.it don't give error but it gonna ignored.
print(s)
print()
#venn daigram prefer to better understand.
#venn daigram prefer to better understand.

movie1={'harry potter','lord of the rings','game of thrones'}
movie2={'harry potter','baby driver'}

allMovies=movie1.union(movie2) # union() method it give all movie name from movie1 and movie2 but duplicate value only once.
print(allMovies)

commonMovie=movie1.intersection(movie2) # intersection() give the common value from movie1 and movie2.
print(commonMovie)

notCommonMovie=movie1.difference(movie2) #difference() give u the uncommon item from movie1 by the movie2.
print(notCommonMovie)