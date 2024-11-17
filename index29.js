function typeOfSum(a, b) {
  return typeof (a + b);
}

function squareArea(A) {
  return +((A / (2 * Math.PI * (1 / 4))) ** 2).toFixed(2);
}

const greet = (name, owner) => `Hello ${name === owner ? "boss" : "guest"}`;

function uefaEuro2016(teams, scores) {
  const result =
    scores[0] === scores[1]
      ? "teams played draw."
      : `${scores[0] > scores[1] ? teams[0] : teams[1]} won!`;
  return `At match ${teams[0]} - ${teams[1]}, ${result}`;
}

function giveMeFive(obj) {
  const array = [];
  for (let key in obj) {
    if (key.length === 5) array.push(key);
    if (obj[key].length === 5) array.push(obj[key]);
  }
  return array;
}
