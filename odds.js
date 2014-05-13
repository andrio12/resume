function calculate(){
	var n = Math.random() * 100;
	var team = "Milwaukee Bucks"
	
	switch(true)
	{
		case (n >= 0 && n < 25.0): 
			team = "Milwaukee Bucks";
			break;

		case (n >= 25.0 && n < 44.9): 
			team = "Philadelphia 76ers";
			break;

		case (n >= 44.9 && n < 60.5): 
			team = "Orlando Magic";
			break;

		case (n >= 60.5 && n < 72.4): 
			team = "Utah Jazz";
			break;
		
		case (n >= 72.4 && n < 81.2): 
			team = "Boston Celtics";
			break;

		case (n >= 81.2 && n < 87.5): 
			team = "Los Angeles Lakers";
			break;

		case (n >= 87.5 && n < 91.1): 
			team = "Sacramento Kings";
			break;

		case (n >= 91.1 && n < 94.6): 
			team = "Detroit Pistons";
			break;

		case (n >= 94.6 && n < 96.3): 
			team = "Cleveland Cavaliers";
			break;

		case (n >= 96.3 && n < 97.4): 
			team = "New Orleans Pelicans";
			break;

		case (n >= 97.4 && n < 98.2): 
			team = "Denver Nuggets";
			break;

		case (n >= 98.2 && n < 98.9): 
			team = "New York Knicks";
			break;

		case (n >= 98.9 && n < 99.5): 
			team = "Minnesota Timberwolves";
			break;

		case (n >= 99.5 && n < 99.9): 
			team = "Phoenix Suns";
			break;

		default:
			break;
	}

	return team;
}

function display(){
	document.getElementById('answer').innerHTML = calculate();
}