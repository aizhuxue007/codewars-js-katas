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
