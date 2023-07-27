import startGames from '../index.js';
import { getRandomValue } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRaund = () => {
  const randomValue = getRandomValue(0, 100);
  const question = `Question: ${randomValue}`;
  const answer = randomValue % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};

export default () => startGames(description, generateRaund);
