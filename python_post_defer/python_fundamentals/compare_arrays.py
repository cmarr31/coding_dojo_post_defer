def compare_arrays(arr1, arr2):
	if arr1 == arr2:
		print "The lists are the same."
	else:
		print "The lists are not the same."

array1 = [1, 6, 12]
array2 = [1, 6, 12]
array3 = [1, 12, 6]

compare_arrays(array1, array2)
compare_arrays(array1, array3)