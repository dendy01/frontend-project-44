import run from '../index.js';
import { getRandomValue, getRandomIndex } from '../utils.js';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculate = (value1, value2, operation) => {
  switch (operation) {
    case '+':
      return String(value1 + value2);
    case '-':
      return String(value1 - value2);
    case '*':
      return String(value1 * value2);
    default:
      throw new Error(`Invalid operator! ${operation} - this operator does not exist!`);
  }
};

const generateRound = () => {
  const value1 = getRandomValue(0, 100);
  const value2 = getRandomValue(0, 100);
  const operation = getRandomIndex(operations);
  const question = `${value1} ${operation} ${value2}`;
  const correctAnswer = String(calculate(value1, value2, operation));

  return [question, correctAnswer];
};

export default () => run(description, generateRound);
