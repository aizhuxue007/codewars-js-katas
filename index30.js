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
