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
