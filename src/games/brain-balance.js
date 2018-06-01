import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import getRandomNumber from '../utils';

const rule = 'Balance the given number.';

const balance = () => {
  const question = getRandomNumber(1, 10000);
  let rightAnswer = '';
  if (question < 10) {
    rightAnswer = String(question);
  } else {
    let numberSum = 0;
    const lengthSum = String(question).length;
    for (let i = 0; i < String(question).length; i += 1) {
      numberSum += Number(String(question)[i]);
    }
    const smallNumber = Math.floor(numberSum / lengthSum);
    const bigNumber = smallNumber + 1;
    const quantityBigNumbers = numberSum % lengthSum;
    const quantitySmallNumbers = lengthSum - quantityBigNumbers;
    rightAnswer = '';
    for (let j = 0; j < quantitySmallNumbers; j += 1) {
      rightAnswer += String(smallNumber);
    }
    for (let j = 0; j < quantityBigNumbers; j += 1) {
      rightAnswer += String(bigNumber);
    }
  }

  return cons(question, rightAnswer);
};

export default () => makeGame(balance, rule);
