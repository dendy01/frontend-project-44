import readlineSync from 'readline-sync';

function greeting() {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  return name;
}

function evenNumberError(randomValue, answer, name) {
  if (randomValue % 2 === 0 && answer.toLowerCase() === 'no') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
    console.log(`Let's try again, ${name}!`);
  }
}

function isCorrectAnswer(operations, randomValue1, randomValue2, answer, name) {
  if (operations === '+' && answer !== (randomValue1 + randomValue2)) {
    console.log(`'${answer}' - is wrong answer ;(. Correct answer was '${randomValue1 + randomValue2}'`);
    console.log(`Let's try again, ${name}!`);
  } else if (operations === '-' && answer !== (randomValue1 - randomValue2)) {
    console.log(`'${answer}' - is wrong answer ;(. Correct answer was '${randomValue1 - randomValue2}'`);
    console.log(`Let's try again, ${name}!`);
  } else if (operations === '*' && answer !== (randomValue1 * randomValue2)) {
    console.log(`'${answer}' - is wrong answer ;(. Correct answer was '${randomValue1 * randomValue2}'`);
    console.log(`Let's try again, ${name}!`);
  }
}

function getGreatestCommonDivisor(firstValue, secondValue) {
  let newFirstValue = firstValue;
  let newSecondValue = secondValue;

  while (newFirstValue !== 0 && newSecondValue !== 0) {
    if (newFirstValue > newSecondValue) {
      newFirstValue %= newSecondValue;
    } else {
      newSecondValue %= newFirstValue;
    }
  }

  return newFirstValue + newSecondValue;
}

export {
  greeting, evenNumberError, isCorrectAnswer, getGreatestCommonDivisor,
};
