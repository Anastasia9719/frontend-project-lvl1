const divisors = (number1, number2) => {
  if (number1 === 0) {
    return number2;
  }
  if (number2 === 0) {
    return number1;
  }
  return divisors(number2, number1 % number2);
};

export default divisors;
