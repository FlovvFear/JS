'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", ""),
  costs = prompt("Введите обязательную статью расходов в этом месяце", ""),
  howMuch = prompt("Во сколько обойдется?", ""),
  optionalCosts = prompt("Введите необязательную статью расходов в этом месяце", ""),
  optionalCowMuch = prompt("Во сколько обойдется?", ""),
  appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

appData.expenses[costs] = howMuch;

alert("Ваш бюджет на один день составляет: " + money/30 + " рублей");