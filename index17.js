Dog.prototype.bark = () => "Woof!";

function solve(str, k) {
  for (let i = 0, n = str.length - k, max = 0; i < n + k; i++) {
    max = Math.max(max, +str.substring(i, n));
  }
}

function changeMe(moneyIn) {
  const acceptedMoney = {
    "£5": "20p ".repeat(25).trim(),
    "£2": "20p ".repeat(10).trim(),
    "£1": "20p ".repeat(5).trim(),
    "50p": "20p 20p 10p",
    "20p": "10p 10p",
  };
  if (!(moneyIn in acceptedMoney)) return moneyIn;
  return acceptedMoney[moneyIn];
}

function ghostBusters(building) {
  if (!building.includes(" "))
    return "You just wanted my autograph didn't you?";
  return building.replaceAll(" ", "");
}

function longestWord(stringOfWords) {
  let largestWord = "";
  stringOfWords.split(" ").forEach((word) => {
    if (word.length >= largestWord.length) largestWord = word;
  });
  return largestWord;
}

function pak(s) {
  return s.trim().length === 0 ? "" : s.split(" ").join(" pak ");
}

function closedBracketWord(word) {
  let check = true;
  const halfLength = Math.floor(word.length / 2);
  for (let i = 0; i <= halfLength; i++) {
    let x = word.charCodeAt(i);
    let y = word.charCodeAt(word.length - 1 - i);
    if (x + y != 219) check = false;
  }
  return check;
}

/* clever solution
function closedBracketWord(s) {
  return s === s.split("").reverse().map(c => "abcdefghijklmnopqrstuvwxyz"["zyxwvutsrqponmlkjihgfedcba".indexOf(c)]).join("");
}
*/

function sumOfMinimums(arr) {
  return arr.reduce((acc, curr) => (acc += Math.min(...curr)), 0);
}

function lottery(str) {
  const uniqueStr = str.match(/\d/g);
  return uniqueStr ? [...new Set(uniqueStr)].join("") : "One more run!";
}

function fraction(a, b) {
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
  const divisor = gcd(a, b);
  const numer = a / divisor;
  const denom = b / divisor;
  return numer + denom;
}
