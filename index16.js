function spinningRings(innerMax, outerMax) {
  let inner = innerMax;
  let outer = 1;
  let moves = 1;
  while (inner !== outer) {
    inner !== 0 ? inner-- : (inner = innerMax);
    outer >= outerMax ? (outer = 0) : outer++;
    moves++;
  }
  return moves;
}

function cantor(nestedList) {
  return nestedList.map((r, i) => +!r[i]);
}

function pairs(ar) {
  let count = 0;
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i <= ar.length; i += 2) {
    p1 = ar[i];
    p2 = ar[i + 1];
    if (Math.abs(p1 - p2) === 1) count++;
  }
  return count;
}
