function days(num_days){
	var payout = 0.01;
	for(var i = 1; i <= num_days; i++){
		payout *=2;
		// console.log(payout);
	}
	console.log(payout);
}
// days(30);


// bonus challenges //

function tenGrand(){
	var num_days = 0;
	var payout = 0.01;
	while(payout < 10000){
		payout *=2;
		num_days +=1; 
		// console.log("It's day " + num_days + ".");
	}
	console.log("It took " + num_days + " days to make $10,000.");
}
tenGrand();