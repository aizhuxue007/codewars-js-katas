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
