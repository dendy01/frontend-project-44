import startGames from '../index.js';
import { getRandomValue, getRandomIndex } from '../utils.js';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const generateCorrectAnswer = (value1, value2, operation) => {
  switch (operation) {
    case '+':
      return String(value1 + value2);
    case '-':
      return String(value1 - value2);
    case '*':
      return String(value1 * value2);
    default:
      throw new Error('Invalid operator!');
  }
};

const generateRaund = () => {
  const randomValue1 = getRandomValue(0, 100);
  const randomValue2 = getRandomValue(0, 100);
  const operation = getRandomIndex(operations);
  const question = `${randomValue1} ${operation} ${randomValue2}`;
  const correctAnswer = generateCorrectAnswer(randomValue1, randomValue2, operation);

  return [question, correctAnswer];
};

export default () => startGames(description, generateRaund);
