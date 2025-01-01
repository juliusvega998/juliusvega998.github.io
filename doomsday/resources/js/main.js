function randomize() {
	var month = Math.floor(Math.random() * 12) + 1;
	var day   = Math.floor(Math.random() * 31) + 1;
	var year  = Math.floor(Math.random() * 2000 + 1000);

	var random_date = new Date("".concat(year, "-", month, "-", day)).toLocaleDateString("en-US")
	document.getElementById("random-date").innerHTML = random_date
	document.getElementById("answer").innerHTML = "Format: MM/DD/YYYY"
}

function showAnswer() { //Uses the doomsday algorithm: https://www.youtube.com/watch?v=z2x3SSBVGJU&t=1s
	var date = document.getElementById("random-date").innerHTML
	var date_split = date.split("/")

	var day   = parseInt(date_split[0])
	var month = parseInt(date_split[1])
	var year  = parseInt(date_split[2])

	var century = 0
	switch(Math.floor(year / 100) % 4) {
		case 0:  century = 2; break;
		case 1:  century = 0; break;
		case 2:  century = 5; break;
		default: century = 3; break;
	}

	var starting_point = Math.floor((year % 100) / 12) % 7
	var doomyear = (Math.floor(year / 100) * 100) + (Math.floor((year % 100) / 12) * 12)
	var leap_years = Math.floor((year - doomyear) / 4)
	var doomsday = (century + starting_point + (year - doomyear) + leap_years) % 7

	marker=0
	switch(month) {
		case 1:
			if (year % 4 == 0) { marker = 4 }
			else { marker = 3 }
			break;
		case 2:  
			if (year % 4 == 0) { marker = 15 }
			else { marker = 14 }
			break;
		case 3:  marker = 14; break;
		case 4:  marker = 4;  break;
		case 5:  marker = 9;  break;
		case 6:  marker = 6;  break;
		case 7:  marker = 11; break;
		case 8:  marker = 8;  break;
		case 9:  marker = 5;  break;
		case 10: marker = 10; break;
		case 11: marker = 7;  break;
		default: marker = 12; break;
	}

	var dotw = Math.abs(doomsday - marker) % 7
	switch(dotw) {
		case 0:  answer = "SUNDAY"    ; break;
		case 1:  answer = "MONDAY"    ; break;
		case 2:  answer = "TUESDAY"   ; break;
		case 3:  answer = "WEDNESDAY" ; break;
		case 4:  answer = "THURSDAY"  ; break;
		case 5:  answer = "FRIDAY"    ; break;
		default: answer = "SATURDAY"  ; break;
	}

	document.getElementById("answer").innerHTML = answer + " ".concat("C:", century, ", SP:", starting_point, ", DY:", doomyear, ", LY:", leap_years, ", DD:", doomsday)
}