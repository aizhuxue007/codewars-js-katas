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

function makeUpperCase(str) {
  return str.toUpperCase();
}

// const getChar = String.fromCharCode;

function getChar(c) {
  return String.fromCharCode(c);
}

// const checkParity = (parity, bin) => +(parity === (bin.split('1').length % 2 ? 'odd' : 'even'))
// https://www.codewars.com/kata/5df261342964c80028345a0a/solutions/javascript

function checkParity(parity, bin) {
  const binParity =
    bin.split("").filter((c) => c === "1").length % 2 === 0 ? "even" : "odd";
  return parity === binParity ? 0 : 1;
}

function testEven(n) {
  return n % 2 === 0;
}
