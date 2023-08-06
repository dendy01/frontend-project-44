import run from '../index.js';
import { getRandomValue } from '../utils.js';

const description = 'What number is missing in the progression?';

function getRandomValues(array, firstOccurrence, range, subRange) {
  for (let i = firstOccurrence; i <= 100; i += range) {
    array.push(i);
  }

  return array.splice(subRange, 10);
}

const generateRound = () => {
  const range = getRandomValue(2, 5);
  const subRange = getRandomValue(0, 3);
  const firstOccurrence = getRandomValue(1, 5);
  const randomItem = getRandomValue(0, 9);
  const arrRandomValues = getRandomValues([], firstOccurrence, range, subRange);
  const answer = String(arrRandomValues.splice(randomItem, 1, '..'));
  const question = `${arrRandomValues.join(' ')}`;

  return [question, answer];
};

export default () => run(description, generateRound);
