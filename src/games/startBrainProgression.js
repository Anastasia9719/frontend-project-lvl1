import gameEngine from '../index.js';

const gameRule = 'What number is missing in the progression?';

const randomNumber10 = () => Math.floor(Math.random() * 10) + 1;

const randomNumber50 = () => Math.floor(Math.random() * 50) + 1;

const arProgression = () => {
  const array = [];
  const random10 = randomNumber10();
  const random50 = randomNumber50();

  for (let i = random50; array.length < 10; i += random10) {
    array.push(i);
  }
  array[random10] = '..';
  return array;
};

// eslint-disable-next-line consistent-return
const findMissNumber = (array) => {
  const lgth = array.length;
  const diff1 = array[1] - array[0];
  const diff2 = array[lgth - 1] - array[lgth - 2];
  if (array[0] !== '..' && array[1] !== '..') {
    for (let i = 0; i <= lgth; i += 1) {
      if (array[i] === '..') {
        // eslint-disable-next-line no-param-reassign
        array[i] = array[0] + diff1 * i;
        return array[i];
      }
    }
  } else {
    for (let i = 0; i <= lgth; i += 1) {
      if (array[i] === '..') {
        // eslint-disable-next-line no-param-reassign
        array[i] = array[i + 1] - diff2 * i;
        return array[i];
      }
    }
  }
};

const gameOptions = () => {
  const progression = arProgression();
  const question = progression.join(' ');
  const rightAnswer = String(findMissNumber(progression));
  return [question, rightAnswer];
};

const startGame = () => {
  gameEngine(gameOptions, gameRule);
};

export default startGame;
