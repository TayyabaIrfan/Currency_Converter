#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    GBP: 0.80,
    MYR: 5.748,
    AED: 3.67,
    PKR: 280,
    INR: 83.33
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Select Your Currency!",
        choices: ["USD", "GBP", "MYR", "AED", "PKR", "INR"]
    },
    {
        name: "To",
        type: "list",
        message: "Select Your Currency To Convert!",
        choices: ["USD", "GBP", "MYR", "AED", "PKR", "INR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount!"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.To];
let Amount = userAnswer.amount;
let baseAmount = Amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.yellow(convertedAmount));
