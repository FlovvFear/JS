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


const log = (msg) => {console.log(msg);};


let numbers = [1, 2, 4, 5, 6, 7, 8],
someNumbers = [1, 2, 'Hello', 4, 5, 'world', 6, 7, 8],
noNumbers = ['здесь',  'нет',  'чисел'];

function isNumber(val) {
	return typeof val === 'number';
}



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

console.log(isSomeTrue(numbers, isNumber, 0)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber, 0)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber, 0)); //вернет false