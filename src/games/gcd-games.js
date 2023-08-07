import run from '../index.js';
import { getRandomValue } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (value1, value2) => {
  let num1 = value1;
  let num2 = value2;

  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }

  return String(num1 + num2);
};

const generateRound = () => {
  const value1 = getRandomValue(1, 100);
  const value2 = getRandomValue(1, 100);
  const answer = String(getGreatestCommonDivisor(value1, value2));
  const question = `${value1} ${value2}`;

  return [question, answer];
};

export default () => run(description, generateRound);
