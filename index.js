function repeatStr(n, s) {
  return s.repeat(n);
}

function grow(x) {
  return x.reduce((acc, current) => {
    return acc * current;
  });
}

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

function countPositivesSumNegatives(input) {
  return input && input !== null && input.length > 0 ? [ input.filter(num => num > 0).length, input.filter(num => num < 0).reduce((sum, curr) => sum + curr) ] : [];
}

function removeExclamationMarks(s) {
  return s.split('!').join('');
}