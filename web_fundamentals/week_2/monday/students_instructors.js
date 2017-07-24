var students = [ 
	{first_name:  'Michael', last_name : 'Jordan'},
	{first_name : 'John', last_name : 'Rosales'},
	{first_name : 'Mark', last_name : 'Guillen'},
	{first_name : 'KB', last_name : 'Tonel'}
]

function studentNames(){
	for (var i = 0; i < students.length; i++) {
		var full_name = students[i].first_name + " " + students[i].last_name;
		console.log(full_name); 
	}
}

//studentNames();


// Part II //


var users = {
	'Students': [ 
		{first_name:  'Michael', last_name : 'Jordan'},
		{first_name : 'John', last_name : 'Rosales'},
		{first_name : 'Mark', last_name : 'Guillen'},
		{first_name : 'KB', last_name : 'Tonel'}
	],
	'Instructors': [
		{first_name : 'Michael', last_name : 'Choi'},
		{first_name : 'Martin', last_name : 'Puryear'}
	]
}

function allNames(){
	console.log('Students');
	for (var i = 0; i < students.length; i++) {
		var full_name = students[i].first_name + " " + students[i].last_name;
		console.log(i+1 + " - " + full_name + " - " + full_name.length); 
	}
}

allNames();