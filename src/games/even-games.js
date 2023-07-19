import startGame from '../index.js';
import random from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEven = () => {
  const randomValue = random(0, 100);
  const question = `Question: ${randomValue}`;
  let answer = '';

  if (randomValue % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [question, answer];
};

export default () => startGame(description, runEven);
