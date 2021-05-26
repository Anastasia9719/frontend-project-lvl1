export const randomNumber = () => Math.floor(Math.random() * 3571) + 1;

// eslint-disable-next-line consistent-return
export const isNumberPrime = (number) => {
  if (number === 1 || number === 2) {
    return 'yes';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    } return 'yes';
  }
};
