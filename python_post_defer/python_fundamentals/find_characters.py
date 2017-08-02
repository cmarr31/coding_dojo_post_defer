a = ["ay", "dude"]
char = ["e"]
new_arr = []

def find_characters(arr, character):
	for count in a:
		if count.find(char[0]) == -1:
			pass
		else:
			new_arr.append(count)
			return new_arr


find_characters(a, char)