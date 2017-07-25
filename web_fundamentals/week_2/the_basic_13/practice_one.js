// 1)
function print(){
	for (var i = 1; i <= 255 ; i++) {
		console.log(i);
	}
}

// 2)
function printIntsSum(){
	var sum = 0;
	for (var i = 0; i <= 255 ; i++) {
		console.log(i);
		sum += i;
	}
	console.log(sum);
}

// 3)
function findPrintMax(arr){
	var max;
	for (var i = arr.length; i > 0; i--) {
		if(arr[i] > arr[i-1]){
			max = arr[i];
		}
	}
	console.log(max);
}

// 4)
function arrayOdds(){
	var newArr = [];
	for (var i = 1; i <= 255; i++) {
		if(i % 3 == 0){
			i + newArr;
		}
	}
}

// 5)
function greaterThanY(arr1, Y){
	var greater = [];
	for (var i = 0; i < arr1.length; i++) {
		if (arr[i] > Y){
			arr[i] += greater;
		}
	}	
	console.log(greater);
	console.log(greater.length);
}

// 6)
function maxMinAverage(arr){
	var max = 0;
	var min = 0;
	var avg = 0;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] > arr[i+1]){
			max = arr[i];
			return max;
		}
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] < arr[i+1]){
			min = arr[i];
			return min;
		}
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] > arr[i+1]){
			avg += arr[i];
			avg /= arr.length;
			return avg;
		}
	}
	console.log(max, min, avg);
}

// 7)
function swapOutNegatives(arr){
	var dojo = "Dojo";
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0){
			arr[i] = dojo;
		}
	}	
}

// 8)
function printOdds(){
	for (var i = 1; i <= 255; i+=2) {
		console.log(i);
	}	
}

// 9)
function iteratePrint(arr){
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}	
}

// 10)
function printAverage(arr){
	var avg = 0;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] > arr[i+1]){
			avg += arr[i];
			avg /= arr.length;
			return avg;
		}
	}
}

// 11)
function squareValues(arr){
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i] * arr[i];
	}	
}

// 12)
function zeroOutNegatives(arr){
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] < 0){
			arr[i] = 0;
		}
	}	
	return arr;
}

// 13)
function shiftValues(arr){
	for (var i = arr.length-1; i >= 0; i--) {
		arr[i-1] = arr[i];
	}	
}













