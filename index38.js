function squares(x, n) {
  if (n < 1) return [];
  const squaresArr = [x];
  for (let i = 1; i < n; i++) {
      squaresArr.push(squaresArr[i - 1]**2);
      }
  return squaresArr;
}
