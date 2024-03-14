function findGCD(a, b) {
  let temp;
  while (b != 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findLCM(a, b) {
  const gcd = findGCD(a, b);
  return (a * b) / gcd;
}

function mnLCM(m, n) {
  const max = Math.max(m, n);
  const min = Math.min(m, n);
  let lcm = 1;

  for (let i = min; i <= max; i++) {
    lcm = findLCM(lcm, i);
  }

  return lcm;
}

function findShort(s) {
  const wordLengths = s.split(" ").map((word) => word.length);
  return Math.min(...wordLengths);
}

function drawSpider(legSize, bodySize, mouth, eye) {
  const legTypes = {
    1: "^ ^",
    2: "/\\ /\\",
    3: "/╲ ╱\\",
    4: "╱╲ ╱╲",
  };
  const bodyTypes = {
    1: "( )",
    2: "(( ))",
    3: "((( )))",
  };
  let legs = legTypes[legSize].split(" ");
  let bodies = bodyTypes[bodySize].split(" ");
  let eyes = eye.repeat(2 ** bodySize / 2);
  return `${legs[0]}${bodies[0]}${eyes}${mouth}${eyes}${bodies[1]}${legs[1]}`;
}

function reverseMiddle(array) {
  let midIndex = array.length / 2 - 1;
  return array
    .slice(midIndex, array.length % 2 === 0 ? midIndex + 2 : midIndex + 3)
    .reverse();
}
