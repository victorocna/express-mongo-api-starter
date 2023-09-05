const coffee = (milliseconds = 3500) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('☕'), milliseconds);
  });
};

export default coffee;
