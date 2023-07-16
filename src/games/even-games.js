import readlineSync from 'readline-sync';
import { evenNumberError, greeting } from '../index.js';

function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

function isEven() {
  let randomValue = 0;
  let counter = 0;
  let answer = '';
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (counter < 3) {
    randomValue = random(0, 100);

    console.log(`Question: ${randomValue}`);

    answer = readlineSync.question('Your answer: ');

    if ((randomValue % 2 === 0 && answer.toLowerCase() === 'yes') || (randomValue % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      counter += 1;
    } else {
      evenNumberError(randomValue, answer, name);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export default isEven;
