const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= fuelLeft * mpg;
};

function GeometricSequenceSum(a, r, n) {
  const sequence = [a];
  for (let i = 1; i < n; i++) {
    sequence.push(sequence[i - 1] * r);
  }
  return sequence.reduce((acc, curr) => (acc += curr), 0);
}

function sentence(arrayOfObjects) {
  const sortedArrObjects = arrayOfObjects.sort(
    (a, b) => Number(Object.keys(a)[0]) - Number(Object.keys(b)[0])
  );
  return sortedArrObjects.map((obj) => obj[Object.keys(obj)[0]]).join(" ");
}
