import readlineSync from 'readline-sync';

function greeting() {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);

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

function getRandomValues(arrRandomValues, firstOccurrence, range, subRange) {
  for (let i = firstOccurrence; i <= 100; i += range) {
    arrRandomValues.push(i);
  }

  return arrRandomValues.splice(subRange, 10);
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

export {
  greeting, evenNumberError, isCorrectAnswer, getGreatestCommonDivisor, getRandomValues, isPrime,
};
