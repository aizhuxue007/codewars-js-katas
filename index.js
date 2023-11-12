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

function excludingVatPrice(price){
  return price == null ? -1 : +(price / (1.15 * 100) * 100).toFixed(2);
}

function mergeArrays(a, b) {
  return [...new Set([...a, ...b].sort((x, y) => x - y))]
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    
  }
  get info() {
      return `${this.name}s age is ${this.age}`
  } 
}

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

class Solution{
  static main(param1, param2) {
    console.log('Hello World!')
  }
}

function bmi(weight, height) {
  var formula = (weight / Math.pow(height, 2));
  switch (true) {
    case formula <=18.5:
    return 'Underweight';
    case formula <=25.0:
    return 'Normal';
    case formula <=30:
    return 'Overweight';
    default:
    return 'Obese';
  }
}

String.prototype.toAlternatingCase = function () {
  return this.split('').map(c => c == c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('')
}

function bigToSmall(arr) {
  return [].concat(...arr).sort((a, b) => b - a).join('>');
}

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, curr) => acc + curr )
}

function find_difference(a, b) {
  return Math.abs(a.reduce((curr, val) => curr * val) - b.reduce((curr, val) => curr * val));
}

function binToDec(bin) {
  return parseInt(bin, 2);
}

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

function hexToDec(hexString){
  return  parseInt(hexString, 16);
}

function between(a, b) {
  arr = [];
  for (i = a; i <= b; i++) arr.push(i)
  return arr;
}

function aspectRatio(x,y){
  return [Math.ceil((16/9) * y), y];
}

function squareSum(numbers){
  return numbers.reduce((acc, curr) => acc + curr ** 2, 0);
}