export const randomNumber = () => Math.floor(Math.random() * 3571) + 1;

export const isNumberPrime = (number) => {
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
