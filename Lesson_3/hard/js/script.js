let str = "урок-3-был слишком легким",
  newStr = str[0].toUpperCase() + str.slice(1);

console.log(newStr);

let mass = newStr.split("");
for(let i = 0; i < mass.length; i++) {
  if (mass[i] == "-") {
    mass[i] = " ";
  }
}

newStr = mass.join("");
console.log(newStr);

console.log(newStr.replace("легким", "легкоо"));

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







