import gameEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  } return 'no';
};

const gameOptions = () => {
  const question = generateRandomNumber();
  const rightAnswer = isEven(question);
  return [question, rightAnswer];
};

const startGame = () => {
  gameEngine(gameOptions, gameRule);
};

export default startGame;
