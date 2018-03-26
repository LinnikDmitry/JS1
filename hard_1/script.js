var num = 33721;
	b = [];
	a = num.toString();

for (var i = 0, len = a.length; i < len; i+=1) {
	b.push(+a.charAt(i));
}

for (var i = 0, result = 1; i < b.length; result *= b[i++]);

console.log(result);

alert(result ** 3);