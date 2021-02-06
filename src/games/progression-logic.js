const progressionGame = () => {
  console.log('What number is missing in the progression?');
  let firstNumber = Math.floor(Math.random() * 5);
  const step = Math.floor(Math.random() * 10);
  const find = Math.floor(Math.random() * 10);

  const answer = `${firstNumber + step * find}`;

  let question = '';
  for (let i = 0; i < 10; i += 1) {
    if (i === find) { question += ' ..'; } else question += ` ${firstNumber}`;
    firstNumber += step;
  }
  return [question, answer];
};

export default progressionGame;
