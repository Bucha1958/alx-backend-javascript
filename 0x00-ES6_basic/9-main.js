import getFullBudgetObject from "./9-getFullBudget.js";

const fullBudget = getFullBudgetObject(400, 700, 900);

console.log(fullBudget.getIncomeInDollars(400));
console.log(fullBudget.getIncomeInEuros(700));