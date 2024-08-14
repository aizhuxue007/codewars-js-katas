function getNumberFromString(s) {
  return Number(s.match(/\d/gm).join(""));
}

function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!";
};

function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}

function expressionMatter(a, b, c) {
  const expressions = [
    a * (b + c),
    a * b * c,
    a + b * c,
    (a + b) * c,
    a + b + c,
  ];
  return Math.max(...expressions);
}

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives <= 0) throw new Error("Out of lives");
    if (n !== this.number) {
      --this.lives;
      return false;
    }
    return true;
  }
}

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + " " + this.lastName;
}

function swapValues() {
  var args = Array.prototype.slice.call(arguments);
  var temp = args[0][0];
  args[0][0] = args[0][1];
  args[0][1] = temp;
}

// August 6 2024

function remove(string) {
  return string.replaceAll("!", "") + "!";
}

const ops = {
  AND: (a, b) => a && b,
  OR: (a, b) => a || b,
  XOR: (a, b) => a !== b,
};

function logicalCalc(array, op) {
  return array.reduce(ops[op]);
}

function remove(string) {
  return string[string.length - 1] === "!"
    ? string.substring(0, string.length - 1)
    : string;
}

function peopleWithAgeDrink(old) {
  if (old < 14) return "drink toddy";
  if (old < 18) return "drink coke";
  if (old < 21) return "drink beer";
  if (old >= 21) return "drink whisky";
}

const include = (arr, item) => arr.includes(item);

function spEng(sentence) {
  return sentence.toLowerCase().includes("english");
}

function aliasGen(fName, lName) {
  const fChar = fName[0].toUpperCase();
  const lChar = lName[0].toUpperCase();
  if (!/[a-zA-Z]/.test(fChar) || !/[a-zA-Z]/.test(lChar))
    return "Your name must start with a letter from A - Z.";
  return `${firstName[fChar]} ${surname[lChar]}`;
}
