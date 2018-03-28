let str = "урок-3-был слишком легким";
	newStr = str[0].toUpperCase() + str.slice(1);
	a = newStr.split('');

a.splice(4, 1, " ");
a.splice(6, 1, " ");
a.splice(-1, 1);
a.splice(-1, 1, "о");

let b = a.join('');

console.log(b);

// let arr = [20, 33, 1, "Человек", 2, 3],
// 	arrNew = []
// 	for ( let i = 0; i < 6; i++) {
// 		if (isNaN(arr)) {			
// 			arrNew[i] = Math.pow(arr[i], 3);	
// 		} 
// 		if (arrNew[i] === NaN) {
// 			arrNew[i] = 0;
// 		}
				
// 	}
// console.log(arrNew);
