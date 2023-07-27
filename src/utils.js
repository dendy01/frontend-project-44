const getRandomValue = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const getRandomIndex = (data) => data[getRandomValue(0, data.length - 1)];

export { getRandomValue, getRandomIndex };
