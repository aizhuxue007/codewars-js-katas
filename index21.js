function sumNoDuplicates(numList) {
  if (numList < 1) return 0;
  const uniques = [...new Set(numList)].filter(
    (val) => numList.indexOf(val) === numList.lastIndexOf(val)
  );
  return uniques.length < 1 ? 0 : uniques.reduce((acc, curr) => (acc += curr));
}

// function squeakyClean(arr) {
//   return arr.filter(Boolean);
// }

function squeakyClean(arr) {
  return arr.filter(
    (item) =>
      !(item === "" || item === 0 || item === null || item === undefined)
  );
}
