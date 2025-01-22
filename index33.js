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

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

function nbDig(n, d) {
  let count = 0;
  const re = RegExp(String.raw`${d}`, "gm");
  for (let k = 0; k <= n; k++) {
    count += String(k ** 2).match(re)?.length || 0;
  }
  return count;
}

function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}

function calculateYears(principal, interest, tax, desired) {
  let year = 0;
  if (principal === desired) return year;
  for (let i = 1; principal < desired; i++) {
    year = i;
    principal += principal * interest - principal * interest * tax;
  }
  return year;
}

function gimme(triplet) {
  const middle = [...triplet].sort((a, b) => a - b)[1];
  return triplet.indexOf(middle);
}
