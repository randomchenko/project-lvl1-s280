import { cons } from 'hexlet-pairs';
import { makeGame } from '..';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const rule = 'Answer "yes" if number even otherwise answer "no".';
const even = () => {
  const number = getRandomNumber();
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  const question = `${number}`;

  return cons(question, rightAnswer);
};

export default () => makeGame(even, rule);
