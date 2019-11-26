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
