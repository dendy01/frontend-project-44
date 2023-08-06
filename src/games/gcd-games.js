import run from '../index.js';
import { getRandomValue } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (value1, value2) => {
  let result = 0;

  while (value1 !== 0 && value2 !== 0) {
    if (value1 > value2) {
      result %= value2;
    } else {
      result %= value2;
    }
  }

  return result + value2;
};

const generateRound = () => {
  const value1 = getRandomValue(1, 100);
  const value2 = getRandomValue(1, 100);
  const answer = String(getGreatestCommonDivisor(value1, value2));
  const question = `${value1} ${value2}`;

  return [question, answer];
};

export default () => run(description, generateRound);
