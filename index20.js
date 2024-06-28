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

const hoopCount = (n) =>
  n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";

function onlyDuplicates(str) {
  const regex = /(\w)(?=.*\1)/g;
  const duplicates = [...new Set(str.match(regex))];
  const answer = str.split("").filter((c) => duplicates.includes(c));
  return answer ? answer.join("") : "";
}

function tailSwap(arr) {
  const xStr = arr[0].split(":");
  const yStr = arr[1].split(":");
  const resultX = [xStr[0], yStr[1]];
  const resultY = [yStr[0], xStr[1]];
  return [resultX.join(":"), resultY.join(":")];
}

function getAge(inputString) {
  return +inputString[0];
}

function mostLikely(prob1, prob2) {
  const p1Arr = prob1.split(":");
  const p1Num = +p1Arr[0];
  const p1Den = +p1Arr[1];
  const p2Arr = prob2.split(":");
  const p2Num = +p2Arr[0];
  const p2Den = +p2Arr[1];
  return p1Num / p1Den >= p2Num / p2Den;
}

function timeForMilkAndCookies(date) {
  return date.getMonth() === 11 && date.getDate() === 24;
}

function equableTriangle(a, b, c) {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c)) === a + b + c;
}
