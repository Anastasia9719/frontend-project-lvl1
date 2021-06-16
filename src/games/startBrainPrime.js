import gameEngine from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const randomNumber = () => Math.floor(Math.random() * 3571) + 1;

const isNumberPrime = (number) => {
  let answer = 'yes';
  if (number === 1 || number === 2) {
    return answer;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      answer = 'no';
      break;
    }
  }
  return answer;
};

const gameOptions = () => {
  const question = randomNumber();
  const rightAnswer = isNumberPrime(question);
  return [question, rightAnswer];
};

const startBrainPrime = () => {
  gameEngine(gameOptions, gameRules);
};

export default startBrainPrime;
