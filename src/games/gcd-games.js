import startGames from '../index.js';
import { generateRandomValue } from '../utils.js';

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

const generateRaund = () => {
  const firstValue = generateRandomValue(1, 100);
  const secondValue = generateRandomValue(1, 100);
  const answer = String(getGreatestCommonDivisor(firstValue, secondValue));
  const question = `Question: ${firstValue} ${secondValue}`;

  return [question, answer];
};

export default () => startGames(description, generateRaund);
