import run from '../index.js';
import { getRandomValue } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => String((a % b) ? getGcd(b, a % b) : Math.abs(b));

const generateRound = () => {
  const value1 = getRandomValue(1, 100);
  const value2 = getRandomValue(1, 100);
  const correctAnswer = getGcd(value1, value2);
  const question = `${value1} ${value2}`;

  return [question, correctAnswer];
};

export default () => run(description, generateRound);
