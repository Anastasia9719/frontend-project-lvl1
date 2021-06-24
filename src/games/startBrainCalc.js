import gameEngine from '../index.js';
import randomNumber from '../randomNumber.js';

const gameRules = 'What is the result of the expression?';

const arrayRandomOperator = (operators) => {
  const randomOperator = (Math.floor(Math.random() * operators.length));
  return operators[randomOperator];
};

const operators = ['+', '*', '-'];

const randomExpression = () => `${randomNumber()} ${arrayRandomOperator(operators)} ${randomNumber()}`;

const gameOptions = () => {
  const question = randomExpression();
  // eslint-disable-next-line no-eval
  const rightAnswer = String(eval(question));
  return [question, rightAnswer];
};

const startGame = () => {
  gameEngine(gameOptions, gameRules);
};

export default startGame;
