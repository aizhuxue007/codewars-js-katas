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
