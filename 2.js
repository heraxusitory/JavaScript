function countNumbers() {
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
					alert('Первое число ' + firstNumber.trim() +
					 ' больше второго числа ' + secondNumber.trim());
				}
				if (firstNumber < secondNumber) {
					alert('Первое число ' + firstNumber.trim() +
					 ' меньше второго числа ' + secondNumber.trim());
				}
				if (firstNumber == secondNumber) {
					alert('Первое число ' + firstNumber +
					 ' равно второму числу ' + secondNumber.trim());
				}
			}
		}
	}
	decision = confirm("Запустить еще раз?");
	if (decision) {
		countNumbers();
	} else {
		return;
	}

}


countNumbers();
