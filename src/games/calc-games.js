import startGames from '../index.js';
import { getRandomValue, getRandomIndex } from '../utils.js';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculateExpectedResponse = (value1, value2, operation) => {
  switch (operation) {
    case '+':
      return String(value1 + value2);
    case '-':
      return String(value1 - value2);
    case '*':
      return String(value1 * value2);
    default:
      throw new Error(`Invalid operator! ${operation} - данного оператора не существует!`);
  }
};

const generateRaund = () => {
  const firstRandomValue = getRandomValue(0, 100);
  const secondRandomValue = getRandomValue(0, 100);
  const operation = getRandomIndex(operations);
  const question = `${firstRandomValue} ${operation} ${secondRandomValue}`;
  const correctAnswer = calculateExpectedResponse(firstRandomValue, secondRandomValue, operation);

  return [question, correctAnswer];
};

export default () => startGames(description, generateRaund);
