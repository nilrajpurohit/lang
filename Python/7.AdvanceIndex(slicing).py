digits=[0,1,2,3,4,5,6,7,8,9]
print(digits[5]) #fetching by index

print(digits[-1]) #fetching by negative index. Negative index is valid in python.

print(digits[0:10]) #it gone print digit from index 0 to 10.

print(digits[0:10:2]) #it gone print digit from index 0 to 10.but by jumping 1 to give 2nd digit.

print(digits[10:0:-2]) #valid..

for i in range(len(digits)): #for loop to print a digits as pattern its called cascading..
    print(digits[0:i])

#another Example of going over through..

name="nilesh rajpurohit"
print(name[0:6]) #in all second index is explicit (means 6-1=5).


for i in range(len(digits)-2): # -2 for remove the 8 and 9 from digits.
    print(digits[i:i+3])

