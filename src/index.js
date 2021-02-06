import readlineSync from 'readline-sync';
// import evenGame from './even-logic.js';
// import calcGame from './calc-logic.js';
import nodGame from './nod-logic.js';

const playGame = (name) => {
  const game = {
    question: '',
    answer: '',
    correctAnswer: '',
  };

  for (let i = 0; i < 3; i += 1) {
    // [game.question, game.correctAnswer] = evenGame();
    // [game.question, game.correctAnswer] = calcGame();
    [game.question, game.correctAnswer] = nodGame();
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
