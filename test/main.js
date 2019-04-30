const log = (msg) => {console.log(msg);};
// function num(arr){
//   let newArr = [];
//   for (let i = 0; i<arr.length; i++) {
//     let count = 0;
//       for(let j = i+1; j < arr.length; j++) {
//         if (arr[j] < arr[i]) {
//           count++;
//         }
//       }
//     newArr.push(count);
//   }
//   console.log(newArr);

// }
// num([15,1,2,3,0,12,4,9]);




// let numbers = [1, 2, 4, 5, 6, 7, 8],
// someNumbers = [1, 2, 'Hello', 4, 5, 'world', 6, 7, 8],
// noNumbers = ['здесь',  'нет',  'чисел'];

// function isNumber(val) {
// 	return typeof val === 'number';
// }



// function isSomeTrue (array, func) {
//     if (func(array[i])) {
// 		i = 0;
// 		return true;
//     } else if (i > array.length) {
// 		i = 0;
// 		return false;
// 	}
// 	i++;
// 	return isSomeTrue(array, func);
// }
// let isSomeTrue = (array, func, i) => {
//     return (func(array[i])) ? true : (array[i] != undefined) ? isSomeTrue(array, func, ++i) : false; 
// };

// function isSomeTrue(array, func, i) {
// 	if(func(array[i])) {
// 		return true;
// 	} else if (array[i] != undefined) {
// 		return isSomeTrue(array, func, ++i);
// 	} else {
// 		return false;
// 	}
    
// }

// console.log(isSomeTrue(numbers, isNumber, 0)); //вернет true
// console.log(isSomeTrue(someNumbers, isNumber, 0)); //вернет true
// console.log(isSomeTrue(noNumbers, isNumber, 0)); //вернет false

// Написать функцию которая принимает массив целых чисел, необходимо отсортировать массив по частоте элементов.
// Самые частые идут первыми.
// Если будет группа чисел одинакового размера то они сортируются в порядке соответствующих номеров во входном массиве
// func([2,3,2,4,5,12,2,3,3,3,12])
// результат -> [3,3,3,3,2,2,2,12,12,4,5]

// let arrIn = [2,3,2,4,5,12,2,3,3,3,12],
// 	arrOut = [];

// for (let i = 0; i < arrIn.length; i++) {
// 	let count = 1;
// 	for (let j = i+1 ; j < arrIn.length; j ++) {
// 		if (arrIn[j] == arrIn[i]) {
// 			count++;
// 		}
// 	}
// 	for (let c = 0; c < count; c++) {
// 		arrOut.push(arrIn[i]);
// 	}
// }
// console.log(arrOut);

// console.log(arrIn.sort((a,b) => a - b));

let arrIn = [2,3,2,4,5,12,2,3,3,3,12],
	arrSort = {};

for (let i = 0; i < arrIn.length; i++) {
	let k = arrIn[i];
	if(arrSort[k] === undefined) {
		arrSort[k] = 1;
	} else {
		arrSort[k]++;
	}
}

log(arrSort);

let arrOut = [];
let count = 0;
for (let key in arrSort) {
	count++;
}

log(count);

for (let i=0; i<count; i++) {
	let maxcount = 0,
		num = 0;
	for (let key in arrSort) {
		if (Number(arrSort[key]) > maxcount) {
			num = Number(key);
			maxcount = Number(arrSort[key]);
		} else {
			if (arrSort[key] == maxcount) {
				if (Number(key) < Number(num)) {
					num = Number(key);
				}
			}
		}
	}
	delete arrSort[num];
	for (let i = 0; i < maxcount; i++) {
		arrOut.push(num);
	}
}
log(arrOut);
