print "Names"

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def print_names(arr):
    for item in arr:
        print item["first_name"] + " " + item["last_name"]
print "Part I"
print_names(students)
print " "

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def names_numbers(dictionary):
    for category in dictionary:
        print category
        i = 0
        for contact in dictionary[category]:
            # print "contact = ", contact
            i = i +1
            temp = contact["first_name"] + " " + contact["last_name"]
            temp = temp + " " + str(len(temp)-2)
            print str(i) + " - " + temp
print "Part II"
print names_numbers(users)