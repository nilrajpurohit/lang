import re

text='A string value'

result=re.compile("[a-z]").search(text) # gonna stop if got one match.
print(result)

result1=re.compile('[a-z]+').search(text) #gonna stop until word complete.
print(result1)

text1='My name is Nil and age is 21' #gonna stop until word complete.
result2=re.compile('[a-zA-Z0-9]+').search(text1)
print(result2)

#emailId...

emailId='My eamilId is nilrajp1318@gmail.com and another one is nilrajpurohit3@gamil.com'
compEmail=re.compile('[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+').search(emailId) #search() just give the time matching value...
print(compEmail)

#for  get all matching value from string then use findall() ..
allemails=re.compile('[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+').findall(emailId)
print(allemails)

#symbolized email like:

symemail='symbolized email like : nil-raj_purohit.@gmail.com'
email1=re.compile('[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+').search(symemail)
print(email1)