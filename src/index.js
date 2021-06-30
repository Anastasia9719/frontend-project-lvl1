import readlineSync from 'readline-sync';

// eslint-disable-next-line consistent-return
const gameEngine = (generateNewRound, gameRule) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name?');

  console.log(`Hello, ${playerName}!`);

  console.log(gameRule);

  for (let rightAnswersCount = 0; rightAnswersCount < 3; rightAnswersCount += 1) {
    const [question, rightAnswer] = generateNewRound();

    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer :(. Correct answer was '${rightAnswer}'.\nLet's try again, ${playerName}!`);
      return null;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default gameEngine;
