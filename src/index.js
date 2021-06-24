import readlineSync from 'readline-sync';

const gameEngine = (gameStart, gameRules) => {
  console.log('Welcome to the Brain Games!');

  let name;

  const askName = () => { name = readlineSync.question('May I have your name?'); };

  const greeting = () => console.log(`Hello, ${name}!`);

  askName();

  greeting();

  console.log(gameRules);

  const exit = () => process.exit(-1);

  let countOfCorrectTries = 0;

  const numberOfRightTries = 3;

  do {
    const [question, rightAnswer] = gameStart();

    console.log(`Question: ${question}`);

    const askForAnswer = () => readlineSync.question('Your answer: ');

    const answer = askForAnswer();

    if (answer === rightAnswer) {
      console.log('Correct!');
      countOfCorrectTries += 1;
    } else {
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      exit();
    }
  }
  while (countOfCorrectTries < numberOfRightTries);

  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
