function differenceOfSquares(n) {
  let sum = 0;
  let squares = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
    squares += i ** 2;
  }
  return sum ** 2 - squares;
}
