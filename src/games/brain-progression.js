import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import getRandomNumber from '../utils';

const rule = 'What number is missing in this progression?';


const progress = () => {
  const progression = [];
  const step = getRandomNumber(1, 10);
  const firstElement = getRandomNumber(0, 20);
  const emptyElement = getRandomNumber(0, 9);
  let rightAnswer = (emptyElement * step) + firstElement;
  rightAnswer = String(rightAnswer);
  for (let j = 0; j < 10; j += 1) {
    if (j === emptyElement) {
      progression.push('..');
    } else {
      const element = String((j * step) + firstElement);
      progression.push(element);
    }
  }
  const question = progression.join(' ');
  return cons(question, rightAnswer);
};
export default () => makeGame(progress, rule);
