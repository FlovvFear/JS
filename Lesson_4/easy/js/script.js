'use strict';

let money, time;

function start() {
  while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
  while(time == "" || time == null) {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
  }
}

// start();

let  appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = +prompt("Во сколько обойдется?", "");
      
      if (typeof(a) === 'string' && typeof(a) != null
      && typeof(b) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
      } else {
        --i;
      }
    }
  },
  chooseOptExpenses: function() {
    for (let i = 0; i < 3; i++) {
      let a = prompt("Введите необязательную статью расходов в этом месяце", "");
  
      if (typeof(a) === 'string' && typeof(a) != null && a != '' && a.length < 50) {
        appData.optionalExpenses[i+1] = a;
      } else {
        --i;
      }
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на один день составляет: " + appData.moneyPerDay + " рублей");
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log("Уровень достатка меньше минимума");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 500) {
      console.log("Уровень достатка минимальный");
    } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 1000) {
      console.log("Уровень достатка средний");
    } else if (appData.moneyPerDay > 1000) {
      console.log("Уровень достатка хороший");
    } else {
      console.log("Что то пошло не так");
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save, percent;
      while(isNaN(save) || save == "" || save == null) {
        save = +prompt("Какова сумма накоплений?", "")
      }
      while(isNaN(percent) || percent == "" || percent == null) {
        percent = +prompt("Какая у вас процентная ставка?", "");
      }
      appData.monthIncome = save/100/12*percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome.toFixed());
    }
  },
  chooseIncome: function() {
    let items;
    while (items == null || items == '') {
      items = prompt("Что принесет дополнительный доход? (Перечислете через запятую)", "");
    }
    appData.income = items.split(", ");
    let more = prompt("Может что-то ещё?");
    if(typeof(more) === 'string') {
      appData.income.push(more);
    }
  }
};

appData.chooseIncome();

function showIncome() {
  appData.income.forEach(function(item, i) {
    alert(i+1 + ":" + item);
  });
}

function showAppData() {
  console.log("Наша программа включает в себя данные: ");
  for(let key in appData) {
    console.log("Свойство: " + key + " = " + appData[key]);
  }
}



