import startGame from '../index.js';
import random from '../utils.js';

function getRandomValues(arrRandomValues, firstOccurrence, range, subRange) {
  for (let i = firstOccurrence; i <= 100; i += range) {
    arrRandomValues.push(i);
  }

  return arrRandomValues.splice(subRange, 10);
}

const description = 'What number is missing in the progression?';

const runProgression = () => {
  const range = random(2, 5);
  const subRange = random(0, 3);
  const firstOccurrence = random(1, 5);
  const randomItem = random(0, 9);
  const arrRandomValues = getRandomValues([], firstOccurrence, range, subRange);
  const answer = String(arrRandomValues.splice(randomItem, 1, '..'));
  const question = `Question: ${arrRandomValues.join(' ')}`;

  return [question, answer];
};

export default () => startGame(description, runProgression);
