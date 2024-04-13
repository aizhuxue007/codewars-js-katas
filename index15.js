function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function strong(n) {
  const factorialSum = String(n)
    .split("")
    .map(Number)
    .reduce((acc, curr) => (acc += factorial(curr)), 0);
  return factorialSum === n ? "STRONG!!!!" : "Not Strong !!";
}

function stepThroughWith(s) {
  return /(.)\1/.test(s);
}

function XO(str) {
  const strArr = str.toLowerCase().split("");
  const xCount = strArr.filter((c) => c === "x").length;
  const oCount = strArr.filter((c) => c === "o").length;
  return xCount === oCount;
}

function smash(words) {
  return words.join(" ");
}

String.prototype.myNewMethod = function () {
  return this.toUpperCase();
};

function rpsls(pl1, pl2) {
  if (pl1 == pl2) return "Draw!";
  const rules = {
    scissors: ["paper", "lizard"],
    paper: ["rock", "spock"],
    rock: ["lizard", "scissors"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
  };
  return rules[pl1].includes(pl2) ? "Player 1 Won!" : "Player 2 Won!";
}

// Need study hard
function cogRpm(cogs, n) {
  const l = cogs.length;
  const sFirst = n % 2 ? -1 : 1;
  const sLast = (n - l) % 2 ? 1 : -1;
  return [sFirst * (cogs[n] / cogs[0]), sLast * (cogs[n] / cogs[l - 1])];
}

function replace(s) {
  return s.replace(/[aeiou]/gi, "!");
}

questions.forEach((question) => (question.usersAnswer = null));

function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}

// Don't understand, kind of cheated...
function titleToNumber(title) {
  return title
    .split("")
    .map((c) => c.charCodeAt(0) - 64)
    .reduce((x, y) => x * 26 * y);
}
