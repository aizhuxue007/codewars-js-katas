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
