import readlineSync from 'readline-sync';

const getRandomNumber = () =>
  Math.floor(Math.random() * 100) + 1;

const brainGcd = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.\n');
  const user = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${user}!`);
  for (let j = 0; j < 3; j += 1) {
    const first = getRandomNumber();
    const second = getRandomNumber();
    let gcd = 101;
    let min = 101;
    let max = 101;
    let divisor = 101;
    if (first === second) {
      gcd = first;
    } else if (first > second) {
      max = first;
      min = second;
      divisor = second;
      while (gcd === 101) {
        if ((max % divisor === 0) && (min % divisor === 0)) {
          gcd = divisor;
        } else {
          divisor -= 1;
        }
      }
    } else if (second > first) {
      max = second;
      min = first;
      divisor = first;
      while (gcd === 101) {
        if ((max % divisor === 0) && (min % divisor === 0)) {
          gcd = divisor;
        } else {
          divisor -= 1;
        }
      }
    }
    console.log(`Question: ${first} ${second}`);
    const userDivisor = readlineSync.question('Your answer: ');
    if (String(userDivisor) === String(divisor)) {
      console.log('Correct!');
    } else {
      console.log(`'${userDivisor}' is wrong answer ;(. Correct answer was '${divisor}'.\nLet's try again, ${user}!`);
      return;
    }
  }
  console.log(`Congratulations, ${user}!`);
};

export default brainGcd;
