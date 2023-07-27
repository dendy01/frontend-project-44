const getRandomValue = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const getRandomIndex = (operations) => operations[getRandomValue(0, operations.length - 1)];

export { getRandomValue, getRandomIndex };
