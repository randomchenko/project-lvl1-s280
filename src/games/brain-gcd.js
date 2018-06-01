import { cons } from 'hexlet-pairs';
import { makeGame } from '..';

const rule = 'Find the greatest common divisor of given numbers.';
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const gcd = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();

  const question = `${number1} ${number2}`;
  const rightAnswer = getGcd(number1, number2);

  return cons(question, rightAnswer);
};

export default () => makeGame(gcd, rule);
