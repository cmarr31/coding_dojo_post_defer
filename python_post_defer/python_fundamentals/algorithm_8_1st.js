// function shift(arr, num){
	// var temp = arr[arr.length-1];
	// arr[arr.length] = 0;
	// for(var i = arr.length-1; i >= 0; i--){
	// 	arr[0] = temp;
	// 	arr[i] = arr[i-1];
	// }
	// return arr;

	// var count = 0;
	// while(count < num){
	// 	arr[0] = temp;
	// 	temp = arr[arr.length-1];
	// 	count +=1;
	// }
	// return arr;
// }              5
// 	temp = arr[arr.length-1];
// 	          //1
// 	temp2 = arr[0];

// 	arr[0] = temp;

// 	arr[arr.length-1] = temp2;
	
// 	console.log(arr);
// }
// console.log(shift(x, 2));

example_arr = [1, 2, 3, 4, 5];

function shift2(arr, num){
	var temp = arr[arr.length-1];
	var x = arr[y];
	var y = 0;
	for(var i = 0; i < arr.length+1; i++){
		arr[arr.length] = arr[i];
		arr[i+1] = arr[i+2];
		arr[arr.length] = arr[y];
	}
	return arr;
}
console.log(shift2(example_arr, 1));

















