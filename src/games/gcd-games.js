import readlineSync from 'readline-sync';
import { greeting, getGreatestCommonDivisor } from '../index.js';

function showGreatestCommonDivisor() {
  let firstValue = 1;
  let secondValue = 1;
  let answer = '';
  let maxCommonDivisor = 0;
  let counter = 0;
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  while (counter < 3) {
    firstValue = Math.round(1 - 0.5 + Math.random() * (100 - 1 + 1));
    secondValue = Math.round(1 - 0.5 + Math.random() * (100 - 1 + 1));

    console.log(`Question: ${firstValue} ${secondValue}`);

    answer = readlineSync.question('Your answer: ');
    maxCommonDivisor = getGreatestCommonDivisor(firstValue, secondValue);

    if (+answer === maxCommonDivisor) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${+answer}' is wrong answer ;(. Correct answer was '${maxCommonDivisor}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export default showGreatestCommonDivisor;
