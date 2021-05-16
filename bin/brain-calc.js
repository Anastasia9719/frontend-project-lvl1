#!/usr/bin/env node
/* eslint-disable no-eval */

import {
  greeting, askName, congrats, letsTryAgain,
} from './src/cli.js';
import randomExpression from './src/randomExpression.js';
import askForAnswer from './src/askForAnswer.js';

console.log('Welcome to the Brain Games!');

askName();
greeting();

console.log('What is the result of the expression?');

let countOfCorrectTries = 0;

const numberOfRightTries = 3;

do {
  const askExpression = randomExpression();

  console.log(`Question: ${askExpression}`);

  const answer = askForAnswer();

  const exit = () => process.exit(-1);

  const solutionOfExpression = () => String(eval(askExpression));

  if (answer === solutionOfExpression()) {
    console.log('Correct!');
    countOfCorrectTries += 1;
  } else {
    console.log(`'${answer}' is wrong answer :(. Correct answer was '${solutionOfExpression()}'.`);
    letsTryAgain();
    exit();
  }
} while (countOfCorrectTries < numberOfRightTries);

congrats();
