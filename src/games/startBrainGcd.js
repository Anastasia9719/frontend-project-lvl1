import gameEngine from '../index.js';
import randomNumber from '../randomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

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
  const number1 = randomNumber();
  const number2 = randomNumber();
  const question = `${number1} ${number2}`;
  const rightAnswer = String(divisors(number1, number2));
  return [question, rightAnswer];
};

const startBrainGcd = () => {
  gameEngine(gameOptions, gameRules);
};

export default startBrainGcd;
