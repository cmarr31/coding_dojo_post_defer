// // 1)
// function print(){
// 	for (var i = 1; i <= 255 ; i++) {
// 		console.log(i);
// 	}
// }
// print();

// //2)
// function printIntsSum(){
// 	var sum = 0;
// 	for (var i = 0; i <= 255 ; i++) {
// 		console.log(i);
// 		sum += i;
// 	}
// 	console.log(sum);
// }
// printIntsSum();

// // 3)
var arr1 = [5, 14, 2, 35, 12, 36];

// function findPrintMax(arr){
// 	var max = 0;
// 	for (var i = 0; i <= arr.length-1; i++) {
// 		if(arr[i] > arr[i-1]){
// 			max = arr[i];
// 			console.log(max);
// 		}
// 	}
// 	console.log(max);
// }
// findPrintMax(arr1);

// // 4)
// function findOdds(){
// 	var newArr = [];
// 	var counter = 0;
// 	for (var i = 1; i <= 255; i +=2) {
// 		newArr[counter] = i;
// 		counter +=1;
// 	}
// 	console.log(newArr);
// }
// findOdds();

// 5)
function greaterThanY(array1, Y){
	var greater = [];
	for (var i = 0; i < array1.length; i++) {
		if (array1[i] > Y){
			greater.append(array1[i]);
			counter +=1;
		}
	}	
	return greater;
	console.log(greater);
	console.log(greater.length);
}
greaterThanY(arr1, 24);

// // 6)
// function maxMinAverage(arr){
// 	var max = 0;
// 	var min = 0;
// 	var avg = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		if(arr[i] > arr[i+1]){
// 			max = arr[i];
// 			return max;
// 		}
// 	for (var i = 0; i < arr.length; i++) {
// 		if(arr[i] < arr[i+1]){
// 			min = arr[i];
// 			return min;
// 		}
// 	for (var i = 0; i < arr.length; i++) {
// 		if(arr[i] > arr[i+1]){
// 			avg += arr[i];
// 			avg /= arr.length;
// 			return avg;
// 		}
// 	}
// 	console.log(max, min, avg);
// }
// maxMinAverage(arr1);

// // 7)
// function swapOutNegatives(arr){
// 	var dojo = "Dojo";
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] < 0){
// 			arr[i] = dojo;
// 		}
// 	}	
// }
// swapOutNegatives(arr1);

// // 8)
// function printOdds(){
// 	for (var i = 1; i <= 255; i+=2) {
// 		console.log(i);
// 	}	
// }
// printOdds();

// // 9)
// function iteratePrint(arr){
// 	for (var i = 0; i < arr.length; i++) {
// 		console.log(arr[i]);
// 	}	
// }

// iteratePrint(arr1);

// // 10)
// function printAverage(arr){
// 	var avg = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		if(arr[i] > arr[i+1]){
// 			avg += arr[i];
// 			avg /= arr.length;
// 			return avg;
// 		}
// 	}
// }
// printAverage(arr1);

// // 11)
// function squareValues(arr){
// 	for (var i = 0; i < arr.length; i++) {
// 		arr[i] = arr[i] * arr[i];
// 	}	
// }
// squareValues(arr1);

// // 12)
// function zeroOutNegatives(arr){
// 	for (var i = 0; i < arr.length; i++) {
// 		if(arr[i] < 0){
// 			arr[i] = 0;
// 		}
// 	}	
// 	console.log(arr);
// 	return arr;
// }
// zeroOutNegatives(arr1);

// // 13)
// function shiftValues(arr){
// 	for (var i = arr.length-1; i >= 0; i--) {
// 		arr[i-1] = arr[i];
// 	}	
// }
// shiftValues(arr1);













