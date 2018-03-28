let money, 
	name, 
	time,
	price = 20
	

function start() {
	money = prompt ("Ваш бюджет?");

	while (isNaN(money) || money == "" || money == null) {
		money = prompt ("Ваш бюджет?");
	}

	name = prompt ("Название вашего магазина?").toUpperCase();
	
}
start();
	  
let	mainList = {
		budget: money,
		nameShop: name,
		shopGoods: [],
		employers: {},
		open: false,
		discount: true
	};

function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");	
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else {
			i = i - 1;
		}
	}
}	
  
chooseGoods();

function hiringEmployers() {
	for (let i = 0; i < 4; i++) {
		let a = prompt("Имя сотрудника?");	
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
			console.log('Имя верно!');
			mainList.employers[i] = i + 1 + '-' + a;
		} else {
			i = i - 1;
		}
	}
}

hiringEmployers();


/*
let i = 0;
while ( i < 5) {
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else if((typeof(a)) !== null || a == ''){
		console.log('Не верно!');
		mainList.shopGoods[i] = prompt("Введите значение");

	}
	i++;
}


let i = 0;
do {
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else if((typeof(a)) !== null || a == ''){
		console.log('Не верно!');
		mainList.shopGoods[i] = prompt("Введите значение");

	}
	i++;
} while (i < 5);

*/

function workTime(time) {
	if (time <0) {
		console.log('Такого просто не может быть');
	} 	else if (time > 0 && time < 20) {
		console.log('Время работать!');
		} 	else if (time < 24) {
			console.log('Уже слишком поздно!');
			} 	else {
				console.log('В сутках только 24 часа!');
				}
}

workTime(18);

function getBudget() {
	alert(mainList.budget / 30);
}	

getBudget();

function getDiscount() {
	if (mainList.discount) {
		let a = price * 0.8;
		console.log(a);
	}	else {
		console.log(price);
		}	
}

getDiscount();


console.log(mainList);