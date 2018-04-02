let menuItem = document.getElementsByClassName('menu-item'),
	advertise = document.getElementsByClassName('adv'),
	li = document.createElement('li'),
	title = document.getElementById('title'),
	//document.getElementsByTagName('body')	
	menu = document.getElementsByClassName('menu')[0];

menu.insertBefore(menuItem[2], menuItem[1]);

li.classList.add("menu-item");
li.textContent = ('Пятый пункт');

menu.appendChild(li);

document.body.style.backgroundImage = 'url(../1/img/apple_true.jpg)';

title.innerHTML = 'Мы продаем подлинную технику Apple';

advertise[0].remove();

let question = prompt('Ваше отношение к технике apple?');
if ((typeof(question)) === 'string' && (typeof(question)) != null && question != '') {
	document.getElementById('prompt').innerHTML = question;
}