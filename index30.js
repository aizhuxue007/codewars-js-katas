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
