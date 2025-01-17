var number = function (array) {
  return array.map((str, i) => `${i + 1}: ${str}`);
};

function stray(numbers) {
  const [a, b] = [...new Set(numbers)];
  const aOccurence = numbers.reduce(
    (acc, val) => (val === a ? (acc += 1) : (acc += 0)),
    0
  );
  const bOccurence = numbers.reduce(
    (acc, val) => (val === b ? (acc += 1) : (acc += 0)),
    0
  );
  return aOccurence < bOccurence ? a : b;
}
