import readlineSync from 'readline-sync';

const brainCalc = () => {
  const getRandomNumber = () =>
    Math.floor(Math.random() * 100) + 1;
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');
  const user = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${user}!`);

  const attemptsNumber = 3;
  for (let i = 0; attemptsNumber > i; i += 1) {
    let sign = '';
    if (i === 0) {
      sign = '+';
    } else if (i === 1) {
      sign = '-';
    } else {
      sign = '*';
    }
    const first = getRandomNumber();
    const second = getRandomNumber();
    const rightAnswer = eval(`${first} ${sign} ${second}`);
    console.log(`Question: ${first} ${sign} ${second}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    if (String(rightAnswer) === String(usersAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${user}' is wrong answer ;(. Correct answer is ${rightAnswer} \nLet's try again, ${user}!`);
      return;
    }
  }
  console.log(`Congratulations, ${user}`);
};

export default brainCalc;
