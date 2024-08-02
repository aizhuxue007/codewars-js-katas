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
