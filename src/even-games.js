import readlineSync from 'readline-sync';

function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

function isEven() {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);

  let randomValue = 0;
  let counter = 0;

  while (true) {
    randomValue = random(0, 100);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${randomValue}`);

    const answer = readlineSync.question('Your answer: ');

    if ((randomValue % 2 === 0 && answer === 'yes') || (randomValue % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log("Let's try again, Bill!");
      return;
    }

    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
  }
}

export default isEven;
