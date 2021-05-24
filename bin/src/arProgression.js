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

export default arProgression;
