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

String.prototype.isUpperCase = function() {
  return this == this.toUpperCase()
}

function makeNegative(num) {
  return -Math.abs(num);
}

function areYouPlayingBanjo(name) {
  return `${name} ${(name[0].toLowerCase() === 'r' ? 'plays': 'does not play')} banjo`;
}

function digitize(n) {
  return String(n).split('').map(Number).reverse();
}

function betterThanAverage(classPoints, yourPoints) {
  let classPointsAverage = classPoints.reduce((acc, curr) => acc + curr) / classPoints.length;
  return yourPoints > classPointsAverage ? true : false;
}

function distanceBetweenPoints(a, b) {
  // return Math.sqrt( (b.x - a.x) ** 2 + (b.y - a.y) ** 2 ); -> my answer
  return Math.hypot(b.x - a.x, b.y - a.y); // -> most upvoted
}

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// Not sure...
var hotpo = function(n, acc = 0) {
  if (n <= 1) {
    return acc;
  } else {
    return hotpo(n % 2 == 0 ? n / 2 : 3 * n + 1, acc + 1)
  }
}