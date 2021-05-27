#!/usr/bin/env node
import askForAnswer from './src/askForAnswer.js';
import {
  askName, greeting, congrats, letsTryAgain,
} from './src/cli.js';
import arProgression from './src/arProgression.js';
import findMissNumber from './src/findMissNumber.js';

console.log('Welcome to the Brain Games!');

askName();

greeting();

console.log('What number is missing in the progression?');

let countOfCorrectTries = 0;

const numberOfRightTries = 3;

do {
  const arifmProgression = arProgression();

  const askProgression = arifmProgression.join(' ');

  console.log(`Question ${askProgression}`);

  const answer = askForAnswer();

  const exit = () => process.exit(-1);

  const rightAnswer = String(findMissNumber(arifmProgression));

  if (answer === rightAnswer) {
    console.log('Correct!');
    countOfCorrectTries += 1;
  } else {
    console.log(`'${answer}' is wrong answer :(. Correct answer was '${rightAnswer}'.`);
    letsTryAgain();
    exit();
  }
} while (countOfCorrectTries < numberOfRightTries);

congrats();
