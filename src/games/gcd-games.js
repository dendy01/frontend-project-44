import run from '../index.js';
import { getRandomValue } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (value1, value2) => {
  let oldValue1 = value1;
  let oldValue2 = value2;

  while (oldValue1 !== 0 && oldValue2 !== 0) {
    if (oldValue1 > oldValue2) {
      oldValue1 %= oldValue2;
    } else {
      oldValue1 %= oldValue2;
    }
  }

  return oldValue1 + oldValue2;
};

const generateRound = () => {
  const value1 = getRandomValue(1, 100);
  const value2 = getRandomValue(1, 100);
  const answer = String(getGreatestCommonDivisor(value1, value2));
  const question = `${value1} ${value2}`;

  return [question, answer];
};

export default () => run(description, generateRound);
