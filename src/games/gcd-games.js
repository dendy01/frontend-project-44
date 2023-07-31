import run from '../index.js';
import { getRandomValue } from '../utils.js';

const getGreatestCommonDivisor = (firstValue, secondValue) => {
  let newFirstValue = firstValue;
  let newSecondValue = secondValue;

  while (newFirstValue !== 0 && newSecondValue !== 0) {
    if (newFirstValue > newSecondValue) {
      newFirstValue %= newSecondValue;
    } else {
      newSecondValue %= newFirstValue;
    }
  }

  return newFirstValue + newSecondValue;
};

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const firstValue = getRandomValue(1, 100);
  const secondValue = getRandomValue(1, 100);
  const answer = String(getGreatestCommonDivisor(firstValue, secondValue));
  const question = `Question: ${firstValue} ${secondValue}`;

  return [question, answer];
};

export default () => run(description, generateRound);
