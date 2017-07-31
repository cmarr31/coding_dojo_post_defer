students = {
	{'first_name1' : 'Michael', 'last_name' : 'Jordan'},
	{'first_name2' : 'John', 'last_name' : 'Rosales'},
	{'first_name3' : 'Mark', 'last_name' : 'Guillen'},
}

# count = 0


# def names(dictionary):
# 	for values in dictionary:
# 		print dictionary[count]['first_name'] + " " + dictionary[count]['last_name']
# 		count +=1
# names(students)

# keys = students[0:-1].keys()
# values = students[0:-1].values()

def names(dictionary):	
	keys = dictionary[0:-1].keys()
	values = dictionary[0:-1].values()
	lst = []
	for key in keys:
		lst.append(key)
	for value in values:
		lst.append(value)
	print lst
names(students)
