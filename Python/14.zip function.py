list1=[1,2,3,4,5]
list2=['one','two','three','four','five']

zipped=list(zip(list1,list2)) #zip() function ...
print(zipped)

unzipped=list(zip(*zipped)) # from unzipe the list use zipe() with astrik symbol(*).
print(unzipped)

# l1=list(unzipped[0])
# l2=list(unzipped[1])
# print(l1)
# print(l2)

items=['Apples','Bananas','Oranges']
counts=[5,10,3]
prices=[10,30,20]

sentences=[]

for(item,count,price) in zip(items,counts,prices): #zip the things and then do..
    item,count,price=str(item),str(count),str(price)
    sentence='I brought '+count+' '+item+'s at '+price+' rupees'
    sentences.append(sentence)

print(sentences)
