var firstNumber = prompt('Введите первое число!');
if (firstNumber != null) {
	while ( firstNumber === '' || !(firstNumber/1)) {
	 	if (firstNumber === '0' || firstNumber == null) {
	 		break;
	 	}
	 	firstNumber = prompt('Что-то пошло не так! Введите первое число! Оно должно состоять из цифр!');
	 }
if (firstNumber != null) {
	var secondNumber = prompt('Введите второе число!');
	while ( secondNumber === ''  || !(secondNumber/1)) {
	 	if (secondNumber === '0' ||  secondNumber == null) {
	 		break;
	 	}
	 	secondNumber = prompt('Что-то пошло не так! Введите второе число! Оно должно состоять из цифр!');
	 }
if (secondNumber != null) {
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
}
}
}