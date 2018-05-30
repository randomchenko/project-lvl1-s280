import readlineSync from 'readline-sync';

const getRandomNumber = () =>
  Math.floor(Math.random() * 100) + 1;

const isEven = num => (num % 2 === 0);
const attemptsNumber = 3;

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}\n`);
  for (let i = 0; i < attemptsNumber; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = isEven(Number(number)) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer is ${answer} \nLet's try again, ${actual}!`);
      return;
    }
  }
  console.log(`Congratulations, ${actual}`);
};

export default brainEven;
