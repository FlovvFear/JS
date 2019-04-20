'use strict';

let num = 33721;

const arr = String(num).split("");
const reducer = (accumulator, currentValue) => accumulator * currentValue;

let res_1 = arr.reduce(reducer);

alert("Произведение цифр: " + res_1);

let res_2 = res_1**3;

alert("Возведение в 3 степень: " + res_2);

alert("Первые две цифры: " + res_2.toString().split('', 2).join(''));

alert( (a.toString().split('').reduce( (a,b) => a * b) ** 3).toString().slice(0,2));














