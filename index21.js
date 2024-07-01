function sumNoDuplicates(numList) {
  if (numList < 1) return 0;
  const uniques = [...new Set(numList)].filter(
    (val) => numList.indexOf(val) === numList.lastIndexOf(val)
  );
  return uniques.length < 1 ? 0 : uniques.reduce((acc, curr) => (acc += curr));
}
