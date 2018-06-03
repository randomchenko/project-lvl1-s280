import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import getRandomNumber from '../utils';

const rule = 'Is this number prime?';
const isPrime = (number) => {
  if (number === 2) {
    return true;
  }
  if (number <= 1 || number % 2 === 0) {
    return false;
  }
  const maxDivisor = Math.floor(Math.sqrt(number));
  for (let j = 3; j <= maxDivisor; j += 2) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
export default () => makeGame(prime, rule);
