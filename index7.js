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
