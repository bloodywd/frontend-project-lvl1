import readlineSync from 'readline-sync';
import evenGame from './games/even-logic.js';
import calcGame from './games/calc-logic.js';
import nodGame from './games/nod-logic.js';

const playGame = (name, selectGame) => {
  const game = {
    question: '',
    answer: '',
    correctAnswer: '',
  };

  for (let i = 0; i < 3; i += 1) {
    if (selectGame === 0) { [game.question, game.correctAnswer] = evenGame(); }
    if (selectGame === 1) { [game.question, game.correctAnswer] = calcGame(); }
    if (selectGame === 2) { [game.question, game.correctAnswer] = nodGame(); }
    // if (selectGame===3) {[game.question, game.correctAnswer] = nodGame();}
    console.log(`Question: ${game.question}`);
    game.answer = readlineSync.question('Your answer: ');
    if (game.answer === game.correctAnswer) { console.log('Correct!'); } else {
      console.log(`'${game.answer}' is wrong answer ;(. Correct answer was '${game.correctAnswer}'`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default playGame;
