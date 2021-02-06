import readlineSync from 'readline-sync';
import playRound from './even-logic.js';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Mayy i have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  if (!playRound(name)) return;
  if (!playRound(name)) return;
  if (!playRound(name)) return;

  console.log(`Congratulations, ${name}`);
};

export default greeting;
