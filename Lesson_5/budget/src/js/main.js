const log = (msg) => {console.log(msg);};

let startBtn = document.querySelector('#start'),
  budgetValue = document.querySelector('.budget-value'),
  dayBudgetValue = document.querySelector('.daybudget-value'),
  levelValue = document.querySelector('.level-value'),
  expensesValue = document.querySelector('.expenses-value'),
  optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
  incomeValue = document.querySelector('.income-value'),
  monthSavingsValue = document.querySelector('.monthsavings-value'),
  yearSavingsValue = document.querySelector('.yearsavings-value'),
  expensesInputs = document.querySelectorAll('input.expenses-item'),
  expensesBtn = document.querySelectorAll('button')[0],
  optExpensesBtn = document.querySelectorAll('button')[1],
  countBtn = document.querySelectorAll('button')[2],
  optExpensesInputs = document.querySelectorAll('.optionalexpenses-item'),
  incomeInput = document.querySelector('#incpme'),
  savingsCheckbox = document.querySelector('input[type="checkbox"]'),
  sumInput = document.querySelector('#sum'),
  percentInput = document.querySelector('#percent'),
  yearInput = document.querySelector('.year input'),
  monthInput = document.querySelector('.month input'),
  dayInput = document.querySelector('.day input');
