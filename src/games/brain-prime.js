import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import getRandomNumber from '../utils';

const rule = 'Is this number prime?';
const isPrime = (question) => {
  let rightAnswer = '';
  if (question < 4) {
    rightAnswer = 'yes';
    return rightAnswer;
  }
  const maxDivisor = Math.floor(Math.sqrt(question));
  for (let j = 2; j <= maxDivisor; j += 1) {
    if (question % j === 0) {
      rightAnswer = 'no';
    }
  }

  if (rightAnswer === '') {
    rightAnswer = 'yes';
  }
  return rightAnswer;
};

const prime = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isPrime(question);
  return cons(question, rightAnswer);
};
export default () => makeGame(prime, rule);
