// BASIC 13 ALGORITHMS |||| CODING DOJO

function print(){
  for (var i = 1; i <= 255; i++){
    console.log(i);
  }
}
print();

function printIntsAndSum(){
  var sum = 0
  for(var i = 0; i <= 255; i++){
    sum += i;
    console.log(i);
    console.log(sum);
  }
}
printIntsAndSum();

array1 = [5, -71, 23, 74, 12, -3];

function findPrintMax(arr){
  var max = 0;
  for(var i = arr.length-1; i > 0; i -=1){
    if(arr[i] > arr[i-1]){
      max = arr[i];
    }
  }
  console.log(max);
}
findPrintMax(array1);

function arrayWithOdds(){
  var arr =[]
  for(var i = 1; i <= 255; i +=2){
    arr.push(i);
  } 
  return arr;
}
arrayWithOdds();

function greaterThanY(arr, Y){
  var new_arr = []
  for(var i = 0; i <= arr.length + 1; i++){
    if(arr[i] > Y){
      //console.log(arr[i]);
      new_arr.push(arr[i]);
    }
  } 
  console.log(new_arr.length);
}
greaterThanY(array1, 8);


function maxMinAvg(arr){
  var max = 0;
  var min = 0; 
  var avg = 0;
  for(var i = arr.length-1; i > 0; i-=1){
    if(arr[i] > arr[i-1]){
      max = arr[i];
    }
    if(arr[i] < arr[i-1]){
      min = arr[i];
    }
    avg += arr[i];
  }
  avg /= arr.length;
  console.log(max + " " + min + " " + avg);
}
maxMinAvg(array1);


function swapNegatives(arr){
  for(var i = 0; i <= arr.length+1; i++){
    if(arr[i] < 0){
      arr[i] = 'Dojo';
    }
  }
  console.log(arr);
  return arr;
}
swapNegatives(array1);



function printOdds(){
  for(var i = 1; i <= 255; i +=2){
    console.log(i);
  }
}
printOdds();

function iterateArray(arr){
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
iterateArray(array1);


function printAverage(arr){
  var sum = 0;
  for(var i = 0; i <= arr.length-1; i++){
    sum += arr[i];
  }
  sum /= arr.length;
  console.log(sum)
}
printAverage(array1);


function squareValues(arr){
  for(var i = 0; i <= arr.length-1; i++){
    arr[i] = arr[i] * arr[i];
  }
  return arr; 
}
squareValues(array1);

function zeroOut(arr){
  for(var i = 0; i <= arr.length-1; i++){
    if(arr[i] < 0){
      arr[i] = 0;
    }
  }
  return arr; 
}
zeroOut(array1);


function shiftValues(arr){
  arr.splice(0, 1);
  arr.splice(arr.length-1, 1, 0);
  return arr;
}
shiftValues(array1);