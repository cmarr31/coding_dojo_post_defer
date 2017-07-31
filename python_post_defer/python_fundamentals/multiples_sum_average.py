def multiples():
	for count in range(5, 1000):
		if (count % 2 != 0):
			print count
		else:
			pass
multiples()

def multiples_five():
	for count in range(5, 1000005):
		if (count % 5 == 0):
			print count
		else:
			pass
multiples_five()

## Sum List

a = [1, 2, 5, 10, 255, 3]

def sum_list():
	count = 0
	for count in a:
		print count
		count +=1
sum_list()

## Average List

def average_list(array):
	average = 0
	for count in array:
		average += count
	average /= len(array)
	print average
average_list(a)