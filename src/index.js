import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfTasks = 3;

const playGame = (makeTask, taskCounter) => {
  if (taskCounter === 0) {
    return true;
  }

  const task = makeTask();
  const question = car(task);
  const rightAnswer = cdr(task);

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return playGame(makeTask, taskCounter - 1);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};
export const makeGame = (makeTask, rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);
  let userName = readlineSync.question('May I have your name? ');
  if (userName.toUpperCase() === 'NO') {
    userName = 'anonim';
  }
  console.log(`Hello, ${userName}!\n`);
  const isWin = playGame(makeTask, numberOfTasks);
  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
export default makeGame;
