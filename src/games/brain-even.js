import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import getRandomNumber from '../utils';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const even = () => {
  const question = getRandomNumber(1, 100);
  let rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  rightAnswer = String(rightAnswer);

  return cons(question, rightAnswer);
};

export default () => makeGame(even, rule);
