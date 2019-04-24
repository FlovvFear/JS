let str = "урок-3-был слишком легким";

str = str[0].toUpperCase() + str.slice(1);

str = str.replace(/-/g, " ");


console.log(str);
console.log(str.slice(str.indexOf("легким")).slice(0, -2) + "оо");


let arr = [20, 33, 1, "Человек", 2, 3];
let sum = 0;

for(let i = 0; i < arr.length; i++) {
  if(typeof(arr[i]) === "number") {
    sum = sum + arr[i] ** 3;
  } 
}

let sqrtSum = Math.sqrt(sum);

console.log(sqrtSum);

function test(a) {
  if(typeof(a) != 'string') {
    alert("не строка");
  } else if (a.length > 50) {
    a = a.slice(0, 50) + "...";
  }
  a = a.trim();
  console.log(a);
}

test(prompt("Введите что нибудь:", ""));







