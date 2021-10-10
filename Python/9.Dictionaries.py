#Dictionaries In Python...

contacts = {'nil': {'mobno': '7414959859', 'email': 'nilrajp1318@gmail.com'},
            'nikul': {'mobno': '9988774422', 'email': 'nikulbhavasr@gmail.com'}}

print(contacts)

word_count = {
    'I': 1,
    'the': 1,
    'nil': 3
}
word_count['rajp'] = 2
print(word_count)
print()

print(word_count.keys())
print(word_count.values())
print(word_count.items())
print()

print(sorted(list(word_count.values()))) #sort the items.
print()

word_count.popitem()
print(word_count)
