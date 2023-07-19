import startGame from '../index.js';
import random from '../utils.js';

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

const runGreatestCommonDivisor = () => {
  const firstValue = random(1, 100);
  const secondValue = random(1, 100);
  const answer = String(getGreatestCommonDivisor(firstValue, secondValue));
  const question = `Question: ${firstValue} ${secondValue}`;

  return [question, answer];
};

export default () => startGame(description, runGreatestCommonDivisor);
