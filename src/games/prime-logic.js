const primeGame = () => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
    return num > 1;
  };
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const number = Math.floor(Math.random() * 100);
  const answer = isPrime(number) ? 'yes' : 'no';

  return [`${number}`, answer];
};

export default primeGame;
