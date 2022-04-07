module.exports = (miliseconds = 3500) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('☕'), miliseconds);
  });
};
