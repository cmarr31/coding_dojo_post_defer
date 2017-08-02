function shift(arr, num){
	var temp = arr[arr.length-1];
	for(var i = arr.length-1; i >= 0; i--){
		arr[0] = temp;
		arr[i] = arr[i-1];
	}
	return arr;
	// var count = 0;
	// while(count < num){
	// 	arr[0] = temp;
	// 	temp = arr[arr.length-1];
	// 	count +=1;
	// }
	// return arr;
}

x = [1, 2, 3, 4, 5];

console.log(shift(x, 2));