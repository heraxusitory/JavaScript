function getuserSum() {

	var number = 0;
	var sum = 0;
	while (number !=  null) {
		sum+=number;
		number = prompt("Введите любое число!");
		if (number == null) {
			break;
		}
		
		if (Number.isInteger(Number(number))) {
			number = Number(number);
			continue;
		} else {
			number = 0;
		}
	}
	alert(sum);
	var desision = confirm("Начать заново?")
	if (desision) {
		getuserSum();
	} else {
		return;
	}

}
getuserSum();

