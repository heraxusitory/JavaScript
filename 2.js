var firstNumber = prompt('Введите первое число!');
while ( firstNumber === '' || firstNumber == null 
 	|| !(firstNumber/1)) {
 	if (firstNumber === '0') {
 		break;
 	}
 	firstNumber = prompt('Что-то пошло не так! Введите первое число! Оно должно состоять из цифр!');
 }
var secondNumber = prompt('Введите второе число!');
while ( secondNumber === '' || secondNumber == null 
 	|| !(secondNumber/1)) {
 	if (secondNumber === '0') {
 		break;
 	}
 	secondNumber = prompt('Что-то пошло не так! Введите второе число! Оно должно состоять из цифр!');
 }
if (firstNumber > secondNumber) {
	alert('Первое число ' + firstNumber +
	 ' больше второго числа ' + secondNumber);
}
if (firstNumber < secondNumber) {
	alert('Первое число ' + firstNumber +
	 ' меньше второго числа ' + secondNumber);
}
if (firstNumber == secondNumber) {
	alert('Первое число ' + firstNumber +
	 ' равно второму числу ' + secondNumber);
}