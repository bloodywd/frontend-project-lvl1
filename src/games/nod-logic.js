const nodGame = () => {
  const gcd = (a, b) => {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  };
  console.log('Find the greatest common divisor of given numbers.');
  const randomNumber1 = Math.floor(Math.random() * 50);
  const randomNumber2 = Math.floor(Math.random() * 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = `${gcd(randomNumber1, randomNumber2)}`;
  return [question, answer];
};

export default nodGame;
