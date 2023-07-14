import readlineSync from 'readline-sync';
import { greeting, isCorrectAnswer } from '../index.js';

function calculate() {
  const name = greeting();
  const operations = ['+', '-', '*'];
  let randomValue1 = 0;
  let randomValue2 = 0;
  let randomIndex = 0;
  let answer = '';
  let counter = 0;

  console.log(`Hello, ${name}`);
  console.log('What is the result of the expression?');

  while (counter < 3) {
    randomValue1 = Math.round(0 - 0.5 + Math.random() * (100 - 0 + 1));
    randomValue2 = Math.round(0 - 0.5 + Math.random() * (100 - 0 + 1));
    randomIndex = Math.round(0 - 0.5 + Math.random() * (2 - 0 + 1));

    console.log(`Question: ${randomValue1} ${operations[randomIndex]} ${randomValue2}`);

    answer = readlineSync.question('Your answer: ');

    if (operations[randomIndex] === '+' && +answer === (randomValue1 + randomValue2)) {
      console.log('Correct!');
      counter += 1;
    } else if (operations[randomIndex] === '-' && +answer === (randomValue1 - randomValue2)) {
      console.log('Correct!');
      counter += 1;
    } else if (operations[randomIndex] === '*' && +answer === (randomValue1 * randomValue2)) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`Question: ${randomValue1} ${operations[randomIndex]} ${randomValue2}`);
      console.log(`Your answer: ${answer}`);

      isCorrectAnswer(operations[randomIndex], randomValue1, randomValue2, answer, name);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export default calculate;
