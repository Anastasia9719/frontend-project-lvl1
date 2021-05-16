import randomNumber from './randomNumber.js';

const arrayRandomOperator = (operators) => {
  const randomOperator = (Math.floor(Math.random() * operators.length));
  return operators[randomOperator];
};

const operators = ['+', '*', '-'];

const randomExpression = () => `${randomNumber()} ${arrayRandomOperator(operators)} ${randomNumber()}`;

export default randomExpression;
