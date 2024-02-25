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

// https://www.codewars.com/kata/reviews/56d6e80ec6e24f2e15000043/groups/56d7733711262d6dbe000115
function yearDays(year) {
  const leap = `${year} has 366 days`;
  const notLeap = `${year} has 365 days`;
  if (year == 0) return leap;
  if (year % 100 == 0) return year % 400 == 0 ? leap : notLeap;
  if (year % 4 == 0) return leap;
  return notLeap;
}

const well = x => {
  const goodCount = x.filter(i => i == 'good').length
  return goodCount > 2 ? 'I smell a series!' : 
         goodCount >= 1 ? 'Publish!': 'Fail!'
}
