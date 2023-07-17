import readlineSync from 'readline-sync';
import { greeting, isCorrectAnswer } from '../index.js';

function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - 0 + 1));
}

function calculate() {
  const name = greeting();
  const operations = ['+', '-', '*'];
  let randomValue1 = 0;
  let randomValue2 = 0;
  let randomIndex = 0;
  let answer = '';
  let counter = 0;

  while (counter < 3) {
    randomValue1 = random(0, 100);
    randomValue2 = random(0, 100);
    randomIndex = random(0, 2);

    console.log("What is the result of the expression?");
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
