import run from '../index.js';
import { getRandomValue } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (value1, value2) => {
  let x = value1;
  let y = value2;

  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }

  return String(x + y);
};

const generateRound = () => {
  const value1 = getRandomValue(1, 100);
  const value2 = getRandomValue(1, 100);
  const correctAnswer = getGreatestCommonDivisor(value1, value2);
  const question = `${value1} ${value2}`;

  return [question, correctAnswer];
};

export default () => run(description, generateRound);
