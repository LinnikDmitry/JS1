var budget = prompt ("Ваш бюджет?");
	nameOfShop = prompt ("Название вашего магазина?");	
	shopGoodsFirst = prompt("Какой тип товаров будем продавать?");
	shopGoodsSecond = prompt("Какой тип товаров будем продавать?");
	shopGoodsThird = prompt("Какой тип товаров будем продавать?");
	shopGoods = [shopGoodsFirst, shopGoodsSecond, shopGoodsThird];
	open = true;
	budgetOnDay = budget / 30;
	employers = {
		sellerA: "Jo",
		sellerB: "John",
		sellerC: "Johnny"
	}

	mainList = {
		budget,
		nameOfShop,
		shopGoods,
		employers,
		open
	}

alert('Бюджет на 1 день:   ' + budgetOnDay);

console.log(mainList);