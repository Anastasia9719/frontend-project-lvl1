#!/usr/bin/env node
/* eslint-disable no-continue */

import randomNumber from './src/randomNumber.js';
import askForAnswer from './src/askForAnswer.js';
import {
  askName, greeting, congrats, noIsWrongAnswer, yesIsWrongAnswer,
} from './src/cli.js';

console.log('Welcome to the Brain Games!');

askName();

greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let countOfCorrectTries = 0;

const numberOfRightTries = 3;

do {
  const askNumber = randomNumber();

  console.log(`Question: ${askNumber}`);

  const answer = askForAnswer();

  const exit = () => process.exit(-1);

  if (askNumber % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
      countOfCorrectTries += 1;
      continue;
    }
    if (answer === 'no') {
      noIsWrongAnswer();
      exit();
    } else {
      console.log('Incorrect answer! Try again!');
      exit();
    }
  } else if (askNumber % 2 !== 0) {
    if (answer === 'no') {
      console.log('Correct!');
      countOfCorrectTries += 1;
      continue;
    }
    if (answer === 'yes') {
      yesIsWrongAnswer();
      exit();
    } else {
      console.log('Incorrect answer! Try again!');
      exit();
    }
  }
} while (countOfCorrectTries < numberOfRightTries);

congrats();
