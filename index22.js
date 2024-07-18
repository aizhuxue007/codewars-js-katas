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

// function sort(arr1, arr2) {
//   const result = new Array(arr1.length);
//   for (let i = 0; i < arr2.length; i++) {
//     result[arr2[i]] = arr1[i];
//   }
//   return result;
// }

function countRedBeads(n) {
  if (n < 2) return 0;
  return (n - 1) * 2;
}
