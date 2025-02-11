function minValue(values) {
  return +[...new Set(values)].sort().join("");
}

function capitalize(s) {
  return [
    s
      .split("")
      .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c))
      .join(""),
    s
      .split("")
      .map((c, i) => (i % 2 === 1 ? c.toUpperCase() : c))
      .join(""),
  ];
}

function rowWeights(array) {
  return [
    array.filter((n, i) => i % 2 === 0).reduce((acc, curr) => (acc += curr), 0),
    array.filter((n, i) => i % 2 === 1).reduce((acc, curr) => (acc += curr), 0),
  ];
}

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((n) => n % 2 === 0);
}

("use strict");

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}

function angle(n) {
  return (n - 2) * 180;
}

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
  let largestDiff = 0;
  let diff = 0;
  a1.forEach((s) => {
    a2.forEach((s2) => {
      diff = Math.abs(s.length - s2.length);
      if (diff > largestDiff) largestDiff = diff;
    });
  });
  return largestDiff;
}

function largestPairSum(numbers) {
  const largestNum = numbers.sort((a, b) => b - a)[0];
  const secondLargestNum = numbers[1];
  return largestNum + secondLargestNum;
}

function noOdds( values ){
    return values.filter(n => n%2 === 0);
}

function countDevelopers(list) {
    return list.filter(dev => dev.continent === 'Europe' && dev.language === 'JavaScript').length;
}

function evenNumbers(array, number) {
    const evens = array.filter(n => n%2 === 0);
    return evens.slice(evens.length - number);
}
