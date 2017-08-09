name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

def make_dictionary(arr1, arr2):
	keys = []
	values = []
	if len(arr1)>=len(arr2):
		keys = arr1
		values = arr2
	else:
		keys = arr2
		values = arr1
	new_dict = {}
	for x in range(len(keys)):
		new_dict[arr1[x]] = arr2[x]
	return new_dict
print make_dictionary(name, favorite_animal)