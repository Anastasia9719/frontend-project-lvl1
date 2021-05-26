#!/usr/bin/env node
import askForAnswer from './src/askForAnswer.js';
import {
  askName, greeting, congrats, letsTryAgain,
} from './src/cli.js';
import { randomNumber, isNumberPrime } from './src/isNumberPrime.js';

console.log('Welcome to the Brain Games!');

askName();

greeting();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let countOfCorrectTries = 0;

const numberOfRightTries = 3;

do {
  const number = randomNumber();

  console.log(`Question ${number}`);

  const answer = askForAnswer();

  const exit = () => process.exit(-1);

  const isPrime = String(isNumberPrime(number));

  if (answer === isPrime) {
    console.log('Correct!');
    countOfCorrectTries += 1;
  } else {
    console.log(`'${answer}' is wrong answer :(. Correct answer was '${isPrime}'.`);
    letsTryAgain();
    exit();
  }
} while (countOfCorrectTries < numberOfRightTries);

congrats();
