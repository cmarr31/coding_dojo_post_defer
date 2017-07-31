students = {
	{'first_name' : 'Michael', 'last_name' : 'Jordan'},
	{'first_name' : 'John', 'last_name' : 'Rosales'},
	{'first_name' : 'Mark', 'last_name' : 'Guillen'},
}

# count = 0


# def names(dictionary):
# 	for values in dictionary:
# 		print dictionary[count]['first_name'] + " " + dictionary[count]['last_name']
# 		count +=1
# names(students)

# keys = students[0:-1].keys()
# values = students[0:-1].values()

# def names(dictionary):	
# 	keys = dictionary[0:-1].keys()
# 	values = dictionary[0:-1].values()
# 	lst = []
# 	for key in keys:
# 		lst.append(key)
# 	for value in values:
# 		lst.append(value)
# 	print lst
# names(students)

# counter = 0
def names(dictionary):
	print dictionary[0]['first_name'] + dictionary[0]['last_name']
	print dictionary[1]['first_name'] + dictionary[1]['last_name']
	print dictionary[2]['first_name'] + dictionary[2]['last_name']
names(students)