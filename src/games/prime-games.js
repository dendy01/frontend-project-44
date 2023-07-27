import startGames from '../index.js';
import { getRandomValue } from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRaund = () => {
  const randomValue = getRandomValue(1, 20);
  const question = randomValue;
  const answer = isPrime(randomValue) ? 'yes' : 'no';

  return [question, answer];
};

export default () => startGames(description, generateRaund);
