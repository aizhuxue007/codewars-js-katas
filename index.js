function repeatStr(n, s) {
  return s.repeat(n);
}

function grow(x) {
  return x.reduce((acc, current) => {
    return acc * current;
  });
}

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

function countPositivesSumNegatives(input) {
  return input && input !== null && input.length > 0 ? [ input.filter(num => num > 0).length, input.filter(num => num < 0).reduce((sum, curr) => sum + curr) ] : [];
}

function removeExclamationMarks(s) {
  return s.split('!').join('');
}

function squareDigits(num){
  let output = '', strNum = String(num);
  for (let i = 0; i < strNum.length; i++) {
    output += Number(strNum[i]) ** 2;
  }
  return Number(output);
}

function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

function hero(bullets, dragons){
  return bullets >= dragons * 2
}