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
	greater = [];
	for (var i = 0; i < arr1.length; i++) {
		if (i > Y){
			i + greater;
		}
	}	
	console.log(greater);
	console.log(greater.length);
}











