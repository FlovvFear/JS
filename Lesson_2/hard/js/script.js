'use sctict';

let week = ["Monday", "Tuesday", "Wednesday", "Thursday", 
"Friday", "Saturday", "Sunday"],
  toDay = "Friday";


for (let i = 0; i < 7; i++) {
  if (week[i] == 'Saturday' || week[i] == 'Sunday') {
    document.write(`<b>${week[i]}</b><br/>`);
  } else if (week[i] == toDay) {
    document.write(`<i>${week[i]}</i><br/>`);
  } else {
    document.write(`${week[i]}<br/>`);
  }
}


let arr = ['245212', '523325678', '722458', '231255', '442325', '334789', '74905'];

arr.forEach((e) => {
  if (e[0] == '3' || e[0] == '7') {
    console.log(e);
  }
});