#!/usr/bin/env node

import askForAnswer from './src/askForAnswer.js';
import {
  askName, greeting, congrats, letsTryAgain,
} from './src/cli.js';
import randomNumber from './src/randomNumber.js';
import allDivisors from './src/allDivisors.js';

console.log('Welcome to the Brain Games!');

askName();

greeting();

console.log('Find the greatest common divisor of given numbers.');

let countOfCorrectTries = 0;

const numberOfRightTries = 3;

do {
  const askNumber1 = randomNumber();

  const askNumber2 = randomNumber();

  console.log(`Question ${askNumber1} ${askNumber2}`);

  const answer = askForAnswer();

  const exit = () => process.exit(-1);

  const divisorOfNumber = String(allDivisors(askNumber1, askNumber2));

  if (answer === divisorOfNumber) {
    console.log('Correct!');
    countOfCorrectTries += 1;
  } else {
    console.log(`'${answer}' is wrong answer :(. Correct answer was '${divisorOfNumber}'.`);
    letsTryAgain();
    exit();
  }
} while (countOfCorrectTries < numberOfRightTries);

congrats();
