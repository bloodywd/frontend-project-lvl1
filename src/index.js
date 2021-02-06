import readlineSync from 'readline-sync';
import evenGame from './games/even-logic.js';
import calcGame from './games/calc-logic.js';
import nodGame from './games/nod-logic.js';
import progressionGame from './games/progression-logic.js';
import primeGame from './games/prime-logic.js';

const playGame = (selectGame) => {
  const game = {
    question: '',
    answer: '',
    correctAnswer: '',
  };
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name?');
  console.log(`Hello, ${name}`);
  let won = true;
  for (let i = 0; i < 3; i += 1) {
    if (won === true) {
      if (selectGame === 0) { [game.question, game.correctAnswer] = evenGame(); }
      if (selectGame === 1) { [game.question, game.correctAnswer] = calcGame(); }
      if (selectGame === 2) { [game.question, game.correctAnswer] = nodGame(); }
      if (selectGame === 3) { [game.question, game.correctAnswer] = progressionGame(); }
      if (selectGame === 4) { [game.question, game.correctAnswer] = primeGame(); }
      console.log(`Question: ${game.question}`);
      game.answer = readlineSync.question('Your answer: ');
      if (game.answer === game.correctAnswer) { console.log('Correct!'); } else {
        console.log(`'${game.answer}' is wrong answer ;(. Correct answer was '${game.correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        won = false;
      }
    }
  }
  if (won) { console.log(`Congratulations, ${name}!`); }
};

export default playGame;
