function padIt(str, n) {
  let result = [str];
  while (n > 0) {
    n % 2 === 0 ? result.push("*") : result.unshift("*");
    n--;
  }
  return result.join("");
}

function calculator(a, b, sign) {
  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
    default:
      return "unknown value";
  }
}

function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}

var ArrowFunc = function (arr) {
  return arr.map((n) => String.fromCharCode(n)).join("");
};

function parseF(s) {
  if (s === 0 || s === "0") return +0;
  return parseFloat(typeof s === "string" ? s.replace(",", ".") : s) || null;
}

function automorphic(n) {
  const squareStringReversed = String(n ** 2)
    .split("")
    .reverse();
  const nDigitsReversed = String(n).split("").reverse();
  return nDigitsReversed.every((n, i) => n === squareStringReversed[i])
    ? "Automorphic"
    : "Not!!";
}

/**
 * Better solution
 */
const automorphic2 = (n) =>
  String(n * n).endsWith(String(n)) ? "Automorphic" : "Not!!";
