function consecutive(arr, a, b) {
  const indexA = arr.indexOf(a);
  return arr[indexA + 1] === b || arr[indexA - 1] === b ? true : false;
}

function isAllPossibilities(x) {
  return x.length > 0 ? x.every((n, i) => x.includes(i)) : false;
}

function pillars(numPill, dist, width) {
  if (numPill < 2) return 0;
  if (numPill == 2) return dist * 100;
  return (numPill - 1) * dist * 100 + (numPill - 2) * width;
}
