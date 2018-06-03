import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import getRandomNumber from '../utils';

const rule = 'Is this number prime?';
const isPrime = (question) => {
  if (question === 2) {
    return true;
  }
  if (question <= 1 || question % 2 === 0) {
    return false;
  }
  const maxDivisor = Math.floor(Math.sqrt(question));
  for (let j = 3; j <= maxDivisor; j += 1) {
    if (question % j === 0) {
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
