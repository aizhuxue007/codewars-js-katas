function typeOfSum(a, b) {
  return typeof (a + b);
}

function squareArea(A) {
  return +((A / (2 * Math.PI * (1 / 4))) ** 2).toFixed(2);
}

const greet = (name, owner) => `Hello ${name === owner ? "boss" : "guest"}`;
