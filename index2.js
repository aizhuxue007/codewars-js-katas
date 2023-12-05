function isDigit(s) {
    return s == parseFloat(s);
}

function sumMul(n,m){
    if (n >= m) return 'INVALID';
    
    let sum = 0;
    for (let i = n; i < m; i += n) {
      sum += i;
    }
    return sum;
}

const flip=(d, a)=>{
  if (d === 'R') return a.sort((x, y) => x - y );
  if (d === 'L') return a.sort((x, y) => y - x );
}

var findAverage = function (nums) {
  return nums.reduce((acc, curr) => acc + curr) / nums.length;
}

function addLength(str) {
  return str.split(" ").map(word => word + ` ${word.length}`);
}

var Ghost = function() {
  let colors = ['white', 'yellow', 'purple', 'red'];
  this.color = colors[Math.floor(Math.random() * 4)];
}

function move (position, roll) {
  return position + roll * 2;
}

function points(games) {
  return games.reduce((acc, curr) => {
    let x = Number(curr.charAt(0));
    let y = Number(curr.charAt(curr.length - 1));
    if (x > y) return acc += 3;
    if (x < y) return acc += 0;
    if (x == y) return acc += 1;
    console.log(acc)
    
  }, 0)
}

function doTurn () {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

function quadrant(x, y) {
  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  return 4
}

function getVowelCount(str) {
  return (str.match(/[aeiou]/ig) || [] ).length;
}

function validateHello(greetings) {
  let pattern = /(hello|english|ciao|salut|hallo|hola|ahoj|czesc)/
  let res =  pattern.test(greetings.toLowerCase()) 
  return res
}

function ifChuckSaysSo()
{
  return !true;
}

function quadratic(x1, x2){
  return [1, -(x1 + x2), (x1 * x2)];
}