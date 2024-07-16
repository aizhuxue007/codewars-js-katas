function reverseLetter(str) {
  return str
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .reverse()
    .join("");
}

function getLargerNumbers(a, b) {
  return a.map((n, i) => Math.max(n, [b[i]]));
}

const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;
  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};
