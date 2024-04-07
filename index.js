#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let currency = {
    USD: 1, //base price
    PKR: 277.54,
    UAE_Dirham: 3.67,
    Canadian_Dollar: 1.36,
    Qatari_Riyal: 3.64,
    INR: 83.3,
    Australian_Dollar: 1.52,
    Saudi_Riyal: 3.75,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.greenBright("Please select the currency you want to convert from: "),
        type: "list",
        choices: [
            "USD",
            "PKR",
            "UAE_Dirham",
            "Canadian_Dollar",
            "Qatari_Riyal",
            "INR",
            "Australian_Dollar",
            "Saudi_Riyal",
        ],
    },
    {
        name: "to",
        message: chalk.blueBright("Please select the currency you want to convert t0: "),
        type: "list",
        choices: [
            "USD",
            "PKR",
            "UAE_Dirham",
            "Canadian_Dollar",
            "Qatari_Riyal",
            "INR",
            "Australian_Dollar",
            "Saudi_Riyal",
        ],
    },
    {
        name: "amount",
        message: "Please enter the amount you want to convert: ",
        type: "number",
    },
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let givenAmount = user_answer.amount;
let baseAmount = givenAmount / fromAmount;
let exchangeAmount = baseAmount * toAmount;
console.log(`${chalk.yellowBright(user_answer.amount)} ${chalk.yellowBright(user_answer.from)} in ${chalk.redBright(user_answer.to)} is: ${chalk.cyanBright(exchangeAmount.toFixed(3))} `);
