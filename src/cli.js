import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Mayy i have your name? ');
  console.log(`Hello, ${name}`);
};

export default greeting;
