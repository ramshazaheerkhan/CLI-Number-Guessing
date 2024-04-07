#! /usr/bin/env node

import inquirer from "inquirer";
// 1) When the program run computer will generate a random number
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10); //using random function to generate random number but it genterate a decimal number from 0to0.9
 // using  floorfunction to roundoff the decimal value
const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-10",
  },
]);
console.log(answers);

if (answers.userGuessedNumber === randomNumber) {
  console.log("Congratulations!! you guessed right number");
} else {
  console.log("Opps! you guessed wrong number");
}
