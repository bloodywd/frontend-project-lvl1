const calcGame = () => {
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);
  const operation = Math.floor(Math.random() * 2);
  const operations = ['+', '-', '*'];
  const question = `${randomNumber1} ${operations[operation]} ${randomNumber2}`;
  let answer;
  if (operation === 0) {
    answer = `${randomNumber1 + randomNumber2}`;
  } else if (operation === 1) {
    answer = `${randomNumber1 - randomNumber2}`;
  } else {
    answer = `${randomNumber1 * randomNumber2}`;
  }
  return [question, answer];
};

export default calcGame;
