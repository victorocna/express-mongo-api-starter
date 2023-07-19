const coffee = (miliseconds = 3500) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('☕'), miliseconds);
  });
};

export default coffee;
