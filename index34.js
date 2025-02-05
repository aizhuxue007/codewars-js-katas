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
    return (n - 2)*180;
}
