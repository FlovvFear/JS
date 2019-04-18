'use strict';

let num = 33721;

function getMultNumber(num) {
  let mult = 1, tmp;
  while (num) {
    tmp = num % 10;
    num = (num - tmp) / 10;
    mult = mult*tmp;
  }
  return mult;
}

let res_1 = getMultNumber(num);

alert("Произведение цифр: " + res_1);

let res_2 = res_1**3;

alert("Возведение в 3 степень: " + res_2);

alert("Первые две цифры: " + res_2.toString().split('', 2).join(''));