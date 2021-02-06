const evenGame = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  return [`${randomNumber}`, randomNumber % 2 === 0 ? 'yes' : 'no'];
};

export default evenGame;
