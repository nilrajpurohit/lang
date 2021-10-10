#Lambda Function in Python:
x=lambda a: a*a
print(x(3))


def new(a):
    return a*a
print(new(5))


#lambda function within user define function..
def a(x):
    return(lambda y:y+x)
t=a(5)
print(t(10))


#lambda function within filter(),map(),reduce()..
myList=[1,2,3,4,5,6,7,8,9]
newList=list(filter(lambda a:(a/3==2),myList))

print(newList)

newList1=list(map(lambda a:(a/3==2),myList))
print(newList1)

#lambda function within reduce() function..
from functools import reduce
reduce(lambda a,b: a+b,[23,56,43,98,1])


#lambda function for algebra..
s=lambda a:a*a
print(s(10))


#equation: 3x+4y
equ=lambda x,y: 3*x+4*y
print(equ(10,10))


#lambda with qudratic equation...
#(a+b)^2

x=lambda a,b: (a+b)**2
print(x(3,4))