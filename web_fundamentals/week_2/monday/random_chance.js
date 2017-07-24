function randomChance(num_quarters){
	winning_number = 31;
	for(var i = num_quarters; i > 0; i--){
		num_quarters -=1;
		var rand_decimal = Math.random();
		rand_decimal *= 100;
		player_number = Math.floor(rand_decimal);
		
		if(player_number == winning_number){
			var winnings = Math.floor((Math.random() * 100) + 50);
			num_quarters += winnings;
			console.log("Congratulations you won " + winnings + "!!! You now have " + num_quarters + " quarters left.")
			return num_quarters;
		}
		else if(num_quarters == 0){
			console.log("Sorry bro, you're fresh outta money. Get out.")
		}
	}
}

randomChance(25);