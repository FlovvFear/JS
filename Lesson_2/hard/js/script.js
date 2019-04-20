'use sctict';

let week = ["Monday", "Tuesday", "Wednesday", "Thursday", 
"Friday", "Saturday", "Sunday"],
  toDay = "Friday",
  parentElem = document.body;

for (let i = 0; i < week.length; i++) {
  let newSpan = document.createElement('span');
  newSpan.innerHTML = `${week[i]}<br/>`;
  parentElem.appendChild(newSpan);
  if (week[i] == 'Saturday' || week[i] == 'Sunday') {
    newSpan.innerHTML = `${week[i].bold()}<br/>`;
  } else if (week[i] == toDay) {
    newSpan.innerHTML = `${week[i].italics()}<br/>`;
  }
}

// for (let i = 0; i < week.length; i++) {
//   if (week[i] == 'Saturday' || week[i] == 'Sunday') {
//     document.write(`<b>${week[i]}</b><br/>`);
//   } else if (week[i] == toDay) {
//     document.write(`<i>${week[i]}</i><br/>`);
//   } else {
//     document.write(`${week[i]}<br/>`);
//   }
// }

// week.forEach((e) => {
//   if (e == 'Saturday' || e == 'Sunday') {
//     document.write(`<b>${e}</b><br/>`);
//   } else if (e == toDay) {
//     document.write(`<i>${e}</i><br/>`);
//   } else {
//     document.write(`${e}<br/>`);
//   }
// })


// let arr = ['245212', '523325678', '722458', '231255', '442325', '334789', '74905'];

// arr.forEach((e) => {
//   if (e[0] == '3' || e[0] == '7') {
//     console.log(e);
//   }
// });