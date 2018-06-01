import { cons } from 'hexlet-pairs';
import { makeGame } from '..';

const rule = 'What is the result of the expression?';
const getRandomNumber = (max, min) => Math.floor(Math.random() * max) + min;

const calc = () => {
  const number1 = getRandomNumber(100, 1);
  const number2 = getRandomNumber(100, 1);
  const sign = getRandomNumber(3, 1);
  let question = '';
  let rightAnswer = 0;
  if (sign === 1) {
    question = `${number1} * ${number2}`;
    rightAnswer = number1 * number2;
  } else if (sign === 2) {
    question = `${number1} - ${number2}`;
    rightAnswer = number1 - number2;
  } else if (sign === 3) {
    question = `${number1} + ${number2}`;
    rightAnswer = number1 + number2;
  }

  return cons(question, rightAnswer);
};

export default () => makeGame(calc, rule);
