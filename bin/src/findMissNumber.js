// eslint-disable-next-line consistent-return
const findMissNumber = (arifmProgression) => {
  const lgth = arifmProgression.length;
  const differenceBetween01 = arifmProgression[1] - arifmProgression[0];
  const differenceBetweenLastPenultimate = arifmProgression[lgth - 1] - arifmProgression[lgth - 2];
  if (arifmProgression[0] !== '..' && arifmProgression[1] !== '..') {
    for (let i = 0; i <= lgth; i += 1) {
      if (arifmProgression[i] === '..') {
        // eslint-disable-next-line no-param-reassign
        arifmProgression[i] = arifmProgression[0] + differenceBetween01 * i;
        return arifmProgression[i];
      }
    }
  } else {
    for (let i = 0; i <= lgth; i += 1) {
      if (arifmProgression[i] === '..') {
        // eslint-disable-next-line no-param-reassign
        arifmProgression[i] = arifmProgression[i + 1] - differenceBetweenLastPenultimate * i;
        return arifmProgression[i];
      }
    }
  }
};

export default findMissNumber;
