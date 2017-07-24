function printRange(start, end, increment){
	console.log(start);
	while(start < end){
		start += increment;
		console.log(start);
	}
}

printRange(3, 12, 3);