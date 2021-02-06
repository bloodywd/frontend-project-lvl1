import readlineSync from 'readline-sync';

const playRound = (name) => {
  const checkEven = (number, answer) => {
    if (answer === 'yes') {
      return (number % 2 === 0);
    } if (answer === 'no') {
      return (number % 2 === 1);
    } return false;
  };

  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const result = checkEven(randomNumber, answer);
  if (result) console.log('Correct!');
  else {
    console.log(`Let's try again, ${name}`);
    let correctAnswer;
    if (randomNumber % 2 === 0) { correctAnswer = 'yes'; } else correctAnswer = 'no';
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  }
  return result;
};

export default playRound;
