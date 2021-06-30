import gameEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const divisors = (number1, number2) => {
  if (number1 === 0) {
    return number2;
  }
  if (number2 === 0) {
    return number1;
  }
  return divisors(number2, number1 % number2);
};

const gameOptions = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const question = `${number1} ${number2}`;
  const rightAnswer = String(divisors(number1, number2));
  return [question, rightAnswer];
};

const startGame = () => {
  gameEngine(gameOptions, gameRule);
};

export default startGame;
