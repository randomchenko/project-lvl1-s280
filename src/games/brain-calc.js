import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import getRandomNumber from '../utils';

const rule = 'What is the result of the expression?';

const calc = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const sign = getRandomNumber(1, 3);
  let question = '';
  let rightAnswer = 0;
  if (sign === 1) {
    question = `${number1} * ${number2}`;
    rightAnswer = String(number1 * number2);
  } else if (sign === 2) {
    question = `${number1} - ${number2}`;
    rightAnswer = String(number1 - number2);
  } else if (sign === 3) {
    question = `${number1} + ${number2}`;
    rightAnswer = String(number1 + number2);
  }

  return cons(question, rightAnswer);
};

export default () => makeGame(calc, rule);
