import {
  askName, greeting, congrats, letsTryAgain, askForAnswer,
} from './cli.js';

const gameEngine = (gameStart, gameRules) => {
  console.log('Welcome to the Brain Games!');

  askName();

  greeting();

  console.log(gameRules);

  const exit = () => process.exit(-1);

  let countOfCorrectTries = 0;

  const numberOfRightTries = 3;

  do {
    const [question, rightAnswer] = gameStart();

    console.log(`Question: ${question}`);

    const answer = askForAnswer();

    if (answer === rightAnswer) {
      console.log('Correct!');
      countOfCorrectTries += 1;
    } else {
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${rightAnswer}'.`);
      letsTryAgain();
      exit();
    }
  }
  while (countOfCorrectTries < numberOfRightTries);

  congrats();
};

export default gameEngine;
