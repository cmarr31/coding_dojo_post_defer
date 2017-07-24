arr1 = ["James", "Jill", "Jane", "Jack"];

function fancyArray(arr){
	for(var i = 0; i < arr.length; i++){
		console.log(i + " -> " + arr[i]);
	}
}

// fancyArray(arr1);

// Bonus stuff

function fancyArray(arr, symbol){
	for(var i = 0; i < arr.length; i++){
		console.log(i + " " + symbol + " " + arr[i]);
	}
}

fancyArray(arr1, "----->");