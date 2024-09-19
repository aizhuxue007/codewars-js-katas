const reverseSeq = (n) => {
  const arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};
