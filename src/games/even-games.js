import run from '../index.js';
import { getRandomValue } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (value) => (value % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const value = getRandomValue(0, 100);
  const question = `Question: ${value}`;
  const answer = isEven(value);

  return [question, answer];
};

export default () => run(description, generateRound);
