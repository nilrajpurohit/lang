# File Handling in Python..
# import os
#Write mode open the file if exsist else create a new file... (w) mode
# file=open("C:/Users/Niluttu/Desktop/filHandling.txt",'w')
# file.write('Hello World')
# file.close()


#Read Mode file Open if file is not exsist then give Error.. (r)mode
# file=open("c:/Users/Niluttu/Desktop/filHandling.text","r")
# print(file.read())
# print()
# print(file.readline())
# print()
# print(file.readlines())
# print()
# for line in file:
#     print(line)
# file.close()


#Open The file in Write mode and Write something on it.That gonna OverWrittern...
# file=open('c:/Users/Niluttu/Desktop/filHandling.text','w')
# file.write('Welcome to Python.\n File handling Concept in paython')
# file.close()

#Append Mode file open if exsist else create new one..(a) mode
#and if you write something by using append mode it not gonna overwrittern...
# file=open('c:/Users/Niluttu/Desktop/filHandling.text','a')
# file.write('\n Its An Append Mode')
# print(file.read())
# file.close()



#X mode it is file Create mode and we can write something in file with this mode....(x)mode
# file=open('c:/Users/Niluttu/Desktop/MypyData.txt','x')
# file.write('Hey Get out of here this is my personal data! ')
# file.close()

# Deleting File and Folder..
# Note That the file and Folder is Already Deleted
# os.remove('C:/Users/Niluttu/Desktop/Data/filHandling.txt')
# os.rmdir('C:/Users/Niluttu/Desktop/Data')