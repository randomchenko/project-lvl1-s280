import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import getRandomNumber from '../utils';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const isEven = question => (question % 2 === 0 ? 'yes' : 'no');

const even = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isEven(question);

  return cons(question, rightAnswer);
};

export default () => makeGame(even, rule);
