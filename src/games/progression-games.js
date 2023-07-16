import readlineSync from 'readline-sync';
import { getRandomValues, greeting } from '../index.js';

function progression() {
  const name = greeting();
  let arrRandomValues = [];
  let range = 0;
  let subRange = 0;
  let firstOccurrence = 0;
  let randomItem = 0;
  let counter = 0;

  console.log('What number is missing in the progression?');

  while (counter < 3) {
    range = Math.floor(2 + Math.random() * (5 + 1 - 2));
    subRange = Math.floor(0 + Math.random() * (3 + 1 - 0));
    firstOccurrence = Math.floor(1 + Math.random() * (5 + 1 - 1));
    randomItem = Math.floor(0 + Math.random() * (9 + 1 - 0));

    arrRandomValues = getRandomValues([], firstOccurrence, range, subRange);
    const item = arrRandomValues.splice(randomItem, 1, '..');

    console.log(`Question: ${arrRandomValues.join(' ')}`);

    const answer = readlineSync.question('Your answer: ');

    if (+answer === +item) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${item}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export default progression;
