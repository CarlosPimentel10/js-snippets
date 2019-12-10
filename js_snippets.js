// format date as dd/mm/yyyy
/*
        var data = new Date();
        console.log(data.toLocaleDateString());
*/
// using a function <input type="text" id="Data" />;

function dataAtualFormatada() {
	var data = new Date(),
		dia = data.getDate().toString(),
		diaF = dia.length == 1 ? '0' + dia : dia,
		mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
		mesF = mes.length == 1 ? '0' + mes : mes,
		anoF = data.getFullYear();
	return diaF + '/' + mesF + '/' + anoF;
}
//$('#Data').val(dataAtualFormatada);

// End of date format snippets

// Get a string and count the words
function countWords(str) {
	return str.split(' ').length;
}

// Get the name of the month if user inputs a number
function monthName(num) {
	switch (num) {
		case 1:
			return 'January';
			break;
		case 2:
			return 'February';
			break;
		case 3:
			return 'March';
			break;
		case 4:
			return 'April';
			break;
		case 5:
			return 'May';
			break;
		case 6:
			return 'June';
			break;
		case 7:
			return 'July';
			break;
		case 8:
			return 'August';
			break;
		case 9:
			return 'September';
			break;
		case 10:
			return 'October';
			break;
		case 11:
			return 'November';
			break;
		case 12:
			return 'December';
			break;
	}
}
// check if a word is between two words after sorting
function isBetween(first, last, word) {
	if (first < word && word < last) {
		return true;
	} else {
		return false;
	}
}

// Getting the version major, minor and patch using str methods challenge
function retrieveMajor(semver) {
	semver.split('.');
	return semver.charAt(0);
}

function retrieveMinor(semver) {
	semver.split('.');
	if (semver.charAt(3) != '.') {
		return semver.slice(2, 4);
	} else {
		return semver.charAt(2);
	}
}

function retrievePatch(semver) {
	semver.split('.');
	if (semver.charAt(4) === '.') {
		return semver.slice(5, 7);
	} else if (semver.charAt(4) != '.') {
		return semver.charAt(4);
	}
}
// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
function Go(num) {
	a = '-';
	return a.repeat(num);
}
// Write a function that returns true if two rooks can attack each other, and false otherwise.
function canCapture([yourRook, opponentsRook]) {
	if (yourRook.charAt(0) == opponentsRook.charAt(0)) {
		return true;
	} else if (yourRook.charAt(1) == opponentsRook.charAt(1)) {
		return true;
	} else {
		return false;
	}
}

/*Write two functions:

firstArg() should return the first parameter passed in.
lastArg() should return the last parameter passed in.
Return undefined if the function takes no parameters.*/
function firstArg() {
	return arguments[0];
}

function lastArg() {
	if (arguments.length <= 1) {
		return arguments[0];
	}
	for (i = 0; i <= arguments.length; ++i) {
		return arguments[(i -= i - 2)];
		if (arguments.length == '') {
			return 'undefined';
		}
	}
}
// Create a function to multiply all values in an array by the amount of values in that array.
function MultiplyByLength(arr) {
	for (i = 0; i <= arr.length; ++i) {
		return arr.map(i => i * arr.length);
	}
}

// Create a function that takes an array of numbers and return the first and last elements as a new array.
function firstLast(arr) {
	newArr = [];
	newArr.push(arr.shift());
	newArr.push(arr.pop());
	return newArr;
}
