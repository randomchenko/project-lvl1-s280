import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import getRandomNumber from '../utils';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const gcd = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const question = `${number1} ${number2}`;
  const rightAnswer = String(getGcd(number1, number2));

  return cons(question, rightAnswer);
};

export default () => makeGame(gcd, rule);
