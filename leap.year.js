var startYear;
var finishYear;
function getBeginAndEndYear(){
	startYear = prompt("Введите начальный год!");
	finishYear = prompt("Введите конечный год!");

	if (startYear >= finishYear) {
		alert("Начальный год больше или равен конечному году!" +
			"Введите даты правильно!");
		getBeginAndEndYear();
	}
}
getBeginAndEndYear();
 
 function getListLeapYears(startYear, finishYear) {
 	for (var i = startYear; i <= finishYear; i++) {
 		
 		if (i % 4 == 0) {
 			if (i % 100 == 0) {
 				if (i % 400 == 0) {
 					console.log(i);
 				} else {
 					continue;
 				}
 			} else {
 				console.log(i);
 			}
 		} else {
 			continue;
 		}
 	}
 }
 getListLeapYears(startYear, finishYear);