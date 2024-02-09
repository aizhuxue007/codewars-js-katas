function maxProduct(numbers, size) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((acc, n) => acc * n);
}

function wordsToMarks(string) {
  return [...string].reduce((acc, curr) => (acc += curr.charCodeAt(0) - 96), 0);
}

function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();
  if (n == 0 || n == 1) return 1;
  let product = 1;
  for (let i = n; i > 1; i--) {
    product *= i;
  }
  return product;
}

function sumArray(array) {
  return array != null && array.length > 1
    ? array.reduce((acc, curr) => (acc += curr), 0) -
    Math.max(...array) -
    Math.min(...array)
    : 0;
}

const phrases = [
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
  "not at all",
];

function howMuchILoveYou(n) {
  return phrases[(n - 1) % phrases.length];
}

function inAscOrder(arr) {
  const copy = [...arr];
  copy.sort((a, b) => a - b);
  return copy.every((val, index) => val === arr[index]);
}

const sumSquareEvenRootOdd = (ns) => {
  return +ns
    .map((n) => (n % 2 == 0 ? n ** 2 : n ** 0.5))
    .reduce((acc, curr) => (acc += curr))
    .toFixed(2);
};

function vaporcode(string) {
  return string
    .replace(/\s/g, "")
    .split("")
    .map((c) => c.toUpperCase())
    .join("  ");
}

function oddOnesOut(nums) {
  const occurrences = nums.reduce((acc, val) => {
    const string = val.toString();
    acc[string] = acc[string] ? acc[string] + 1 : 1;
    return acc;
  }, {});

  return nums.filter((v) => occurrences[v.toString()] % 2 == 0);
}

function hexHash(code) {
  return code.split('').map(c => c.charCodeAt(0).toString(16)).reduce((acc, curr) => {
    const n = curr.replace(/\D/g, '').split('').reduce((acc, curr) => acc += Number(curr), 0)
    return acc += n
  }, 0)
}

function add(a, b) {
  return a + b
}

function divide(a, b) {
  return a / b
}

function multiply(a, b) {
  return a * b
}

function mod(a, b) {
  return a % b
}

function exponent(a, b) {
  return a ** b
}

function subt(a, b) {
  return a - b
}

// need analysis
function makeValley(arr) {
  let l = []
  let r = []
  arr
    .sort((a, b) => a - b)
    .forEach((n, i) => {
      i % 2 == 1 ? l.push(n) : r.unshift(n)
    })
  return [...l, ...r]
}

function strCount(str, letter) {
  const regex = new RegExp(letter, "g");
  return (str.match(regex) || []).length
}