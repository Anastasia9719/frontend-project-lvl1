// eslint-disable-next-line consistent-return
const findMissNumber = (arifmProgression) => {
  const differenceBetween01 = arifmProgression[1] - arifmProgression[0];
  // eslint-disable-next-line max-len
  const differenceBetweenLastAndPenultimate = arifmProgression[arifmProgression.length - 1] - arifmProgression[arifmProgression.length - 2];
  if (arifmProgression[0] !== '..' && arifmProgression[1] !== '..') {
    for (let i = 0; i <= arifmProgression.length; i += 1) {
      if (arifmProgression[i] === '..') {
        // eslint-disable-next-line no-param-reassign
        arifmProgression[i] = arifmProgression[0] + differenceBetween01 * i;
        return arifmProgression[i];
      }
    }
  } else {
    for (let i = 0; i <= arifmProgression.length; i += 1) {
      if (arifmProgression[i] === '..') {
        // eslint-disable-next-line no-param-reassign
        arifmProgression[i] = arifmProgression[i + 1] - differenceBetweenLastAndPenultimate * i;
        return arifmProgression[i];
      }
    }
  }
};

export default findMissNumber;
