let money, 
	name, 
	time,
	price;
	

function start() {
	money = prompt ("Ваш бюджет?", '');

	while (isNaN(money) || money == "" || money == null) {
		money = prompt ("Ваш бюджет?");
	}

	name = prompt ("Название вашего магазина?", '').toUpperCase();
	
}
// start();
	  
let	mainList = {
		budget: money,
		nameShop: name,
		shopGoods: [],
		employers: {},
		open: false,
		discount: true,
		shopItems: [],
		chooseGoods: function chooseGoods() {
			for (let i = 0; i < 5; i++) {
			let a = prompt("Какой тип товаров будем продавать?", '');	
				if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
					console.log('Все верно!');
					mainList.shopGoods[i] = a;
				} else {
					i = i - 1;
				}
			}
		},
		workTime: function workTime(time) {
			if (time <0) {
				console.log('Такого просто не может быть');
			} 	else if (time > 0 && time < 20) {
					console.log('Время работать!');
					mainList.open = true;
				} 	else if (time < 24) {
						console.log('Уже слишком поздно!');
					} 	else {
							console.log('В сутках только 24 часа!');
						}
		},
		dayBudget: function dayBudget() {
			alert(mainList.budget / 30);
		},
		makeDiscount: function makeDiscount() {
			if (mainList.discount == true) {
				price = price * 0.8;
				console.log(a);
			}	
		},
		hireEmployers: function hireEmployers() {
			for (let i = 0; i < 4; i++) {
				let a = prompt("Имя сотрудника?", '');	
				if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
					console.log('Имя верно!');
					mainList.employers[i] = i + 1 + '-' + a;
				} else {
					i = i - 1;
				}
			}
		},
		chooseShopItems: function chooseShopItems() {
			let items = prompt("Перечислите через запятую товары", '');
			if ((typeof(items)) === 'string' && (typeof(items)) != null && items != '' ) {
					mainList.shopItems = items.split(",");
					mainList.shopItems.push(prompt("Подождите еще ", "" ));
					mainList.shopItems.sort();
			}	else {
				chooseShopItems();
			}

			mainList.shopItems.forEach(function(item, i, arr) {
				j = i + 1;
				console.log("У нас вы можете купить: " + j + item)
			});

		},

};

for ( let key in mainList ) {
	
	console.log( "Наш магазин включает в себя: " + key )
}

console.log(mainList);