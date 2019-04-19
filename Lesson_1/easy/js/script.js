'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", ""),
  c1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
  h1 = +prompt("Во сколько обойдется?", ""),
  c2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
  h2 = +prompt("Во сколько обойдется?", ""),
  appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

appData.expenses[c1] = h1;
appData.expenses[c2] = h2;

alert("Ваш бюджет на один день составляет: " + money/30 + " рублей");