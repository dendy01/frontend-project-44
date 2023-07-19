import startGame from '../index.js';
import random from '../utils.js';

const description = 'What is the result of the expression?';

const runCalc = () => {
  const operations = ['+', '-', '*'];
  const randomValue1 = random(0, 100);
  const randomValue2 = random(0, 100);
  const randomIndex = random(0, 2);
  const question = `${randomValue1} ${operations[randomIndex]} ${randomValue2}`;
  let answer = '';

  if (operations[randomIndex] === '+') {
    answer = String(randomValue1 + randomValue2);
  } else if (operations[randomIndex] === '-') {
    answer = String(randomValue1 - randomValue2);
  } else if (operations[randomIndex] === '*') {
    answer = String(randomValue1 * randomValue2);
  }

  return [question, answer];
};

export default () => startGame(description, runCalc);
