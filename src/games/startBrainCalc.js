import gameEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const gameRule = 'What is the result of the expression?';

const arrayRandomOperator = (operators) => {
  const randomOperator = (Math.floor(Math.random() * operators.length));
  return operators[randomOperator];
};

const operators = ['+', '*', '-'];

const randomExpression = () => `${generateRandomNumber()} ${arrayRandomOperator(operators)} ${generateRandomNumber()}`;

const gameOptions = () => {
  const question = randomExpression();
  // eslint-disable-next-line no-eval
  const rightAnswer = String(eval(question));
  return [question, rightAnswer];
};

const startGame = () => {
  gameEngine(gameOptions, gameRule);
};

export default startGame;
