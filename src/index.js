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

  if (String(userAnswer) === String(rightAnswer)) {
    console.log('Correct!');
    return playGame(makeTask, taskCounter - 1);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};
export const makeGame = (makeTask, rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const result = playGame(makeTask, numberOfTasks);
  if (result) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
export default makeGame;
