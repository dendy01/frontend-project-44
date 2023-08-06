import run from '../index.js';
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

const generateRound = () => {
  const value = getRandomValue(1, 20);
  const question = value;
  const answer = isPrime(value) ? 'yes' : 'no';

  return [question, answer];
};

export default () => run(description, generateRound);
