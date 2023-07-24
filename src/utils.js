const generateRandomValue = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const getRandomIndex = (operations) => operations[generateRandomValue(0, operations.length - 1)];

export { generateRandomValue, getRandomIndex };
