const evenGame = () => {
  console.log('What is the result of the expression?');
  const randomNumber = Math.floor(Math.random() * 100);
  return [`${randomNumber}`, randomNumber % 2 === 0 ? 'yes' : 'no'];
};

export default evenGame;
