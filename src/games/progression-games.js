import run from '../index.js';
import { getRandomValue } from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (first, step, length) => {
  const array = [];

  for (let i = 0; i < length; i += 1) {
    const result = (first + (step * i));
    array.push(result);
  }

  return array;
};

const generateRound = () => {
  const first = getRandomValue(1, 10);
  const step = getRandomValue(1, 10);
  const length = getRandomValue(10, 10);
  const randomItem = getRandomValue(0, 9);

  const progression = generateProgression(first, step, length);
  const correctAnswer = String(progression.splice(randomItem, 1, '..'));
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => run(description, generateRound);
