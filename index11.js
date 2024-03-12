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
