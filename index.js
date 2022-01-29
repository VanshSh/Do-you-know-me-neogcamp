let readLineSync = require('readline-sync');
const chalk = require('chalk')

// Constant Colors
const quesColor = chalk.cyanBright;
const answColor = chalk.green;


// Welcome and Introduction
let userName = readLineSync.question(chalk.yellowBright("What's your Name? "));

console.log(`Welcome ${chalk.blue(userName)} !`)

console.log(chalk.redBright("\n********************"))


// High Scores
let score = 0;
let highScore =
{
  name: "Mohit",
  points: 8,
}

// Ques list
var quesList =
  [
    {
      ques: "Where do I live ? ",
      answ: "Bahadurgarh",
    },
    {
      ques: "When is my birthday ? ",
      answ: "27 January",
    },
    {
      ques: "Where is my Hometown? ",
      answ: "Baraut",
    },
    {
      ques: "What is my sunsign? ",
      answ: "Aquarius",
    },
    {
      ques: "What is my College name? ",
      answ: "Deshbandhu College",
    },
  ];



// Function Loop
for (let i = 0; i < quesList.length; i++) {
  let currentQues = quesList[i];
  play(currentQues.ques, currentQues.answ);
}

// Quiz Function
function play(ques, answ) {

  let userAns = readLineSync.question(quesColor(ques))

  if (chalk.yellow(userAns.toUpperCase()) === chalk.yellow(answ.toUpperCase())) {
    console.log("\nCongo! That's RIGHT answer.\n");
    score = score + 2;
  } else {
    console.log("\nOPPS! That's WRONG answer.");
    console.log("Right Answer is:", answColor(answ))
  }
  console.log("Current Score: ", score);
  console.log(chalk.redBright("\n*************"));
}

// Final Score
console.log(chalk.bgRed(`Your Final Score is: ${score} `))

console.log(chalk.bgBlue("Highest Score: "))

let highest = [highScore]
let player = highest[0];

console.log(chalk.bgBlue(`${player.name} : ${player.points}  `))
if (player.points < score) {
  console.log(chalk.red.bgWhite("\nYAY! You have scored the highest points. Please send Screenshot.\n"));
} else {
  console.log(chalk.bgRed(`Sad :(  `));
}




console.log(chalk.redBright("*******************************************************"));




















