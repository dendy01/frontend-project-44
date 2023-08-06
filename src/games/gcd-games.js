import run from '../index.js';
import { getRandomValue } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (value1, value2) => {
  let newValue1 = value1;
  let newValue2 = value2;

  while (newValue1 !== 0 && newValue2 !== 0) {
    if (newValue1 > newValue2) {
      newValue1 %= newValue2;
    } else {
      newValue1 %= newValue2;
    }
  }

  return newValue1 + newValue2;
};

const generateRound = () => {
  const value1 = getRandomValue(1, 100);
  const value2 = getRandomValue(1, 100);
  const answer = String(getGreatestCommonDivisor(value1, value2));
  const question = `${value1} ${value2}`;

  return [question, answer];
};

export default () => run(description, generateRound);
