import gameEngine from '../index.js';
import randomNumber from '../randomNumber.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  } return 'no';
};

const gameOptions = () => {
  const question = randomNumber();
  const rightAnswer = isEven(question);
  return [question, rightAnswer];
};

const startBrainEven = () => {
  gameEngine(gameOptions, gameRules);
};

export default startBrainEven;
