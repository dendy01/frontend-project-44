import startGames from '../index.js';
import { generateRandomValue } from '../utils.js';

function getRandomValues(arrRandomValues, firstOccurrence, range, subRange) {
  for (let i = firstOccurrence; i <= 100; i += range) {
    arrRandomValues.push(i);
  }

  return arrRandomValues.splice(subRange, 10);
}

const description = 'What number is missing in the progression?';

const generateRaund = () => {
  const range = generateRandomValue(2, 5);
  const subRange = generateRandomValue(0, 3);
  const firstOccurrence = generateRandomValue(1, 5);
  const randomItem = generateRandomValue(0, 9);
  const arrRandomValues = getRandomValues([], firstOccurrence, range, subRange);
  const answer = String(arrRandomValues.splice(randomItem, 1, '..'));
  const question = `Question: ${arrRandomValues.join(' ')}`;

  return [question, answer];
};

export default () => startGames(description, generateRaund);
