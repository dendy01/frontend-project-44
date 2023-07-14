import readlineSync from 'readline-sync';
import { greeting, isPrime } from '../index.js';

function primeNumber() {
  const name = greeting();
  let randomValue = 0;
  let counter = 0;
  let answer = '';
  let text = '';

  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (counter < 3) {
    randomValue = Math.floor(1 + Math.random() * (20 + 1 - 1));

    console.log(`Question: ${randomValue}`);

    answer = readlineSync.question('Your answer: ');
    text = isPrime(randomValue) ? 'yes' : 'no';

    if (answer === text) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${text}'`);
      console.log("Let's try again, Sam!");
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export default primeNumber;
