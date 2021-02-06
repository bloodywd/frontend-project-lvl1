import readlineSync from 'readline-sync';
import evenGame from './even-logic.js';

const playGame = (name) => {
  const game = {
    task: ['What is the result of the expression?'],
    question: '',
    answer: '',
    correctAnswer: '',
  };

  const selectGame = 0;
  console.log(game.task[selectGame]);

  for (let i = 0; i < 3; i += 1) {
    [game.question, game.correctAnswer] = evenGame();
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
