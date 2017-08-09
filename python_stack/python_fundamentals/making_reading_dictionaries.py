# name, age, country of birth, favorite language.

about_me = {
	'name' : 'Chris',
	'age' : '21',
	'country' : 'USA',
	'fav_language' : 'Python'
}

def making_reading_dictionaries(dictionary):
	print "My name is " + about_me['name'] + "."
	print "My age is " + about_me['age'] + "."
	print "My favorite country is " + about_me['country'] + "."
	print "My favorite language is " + about_me['fav_language'] + "."

making_reading_dictionaries(about_me)
