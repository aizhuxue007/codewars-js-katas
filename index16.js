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

function riders(stations) {
  let totalDist = 0;
  let riders = 1;
  for (let i = 0; i <= stations.length; i++) {
    if (totalDist + stations[i] > 100) {
      riders++;
      totalDist = 0;
    }
    totalDist += stations[i];
  }
  return riders;
}

function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    console.log(array1[i], array2[i]);
    if (array1[i] === array2[i]) {
      console.log("in if");
      score += 4;
    } else if (array2[i].trim() === "") {
      console.log("in else if");
      score += 0;
    } else {
      console.log("in else");
      score -= 1;
    }
  }
  return score < 0 ? 0 : score;
}

function sortVowels(s) {
  if (typeof s !== "string") return "";
  return s
    .split("")
    .map((c) => (/^[aeiou]$/i.test(c) ? `|${c}` : `${c}|`))
    .join("\n");
}

function countBy(x, n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i * x);
  }
  return result;
}

function sumMix(x) {
  return x.reduce((acc, curr) => (acc += Number(curr)), 0);
}

function inverseSlice(items, a, b) {
  return items.filter((_, i) => i < a || i >= b);
}

function numCombo(arr, num) {
  const sum = arr.reduce((a, b) => (a += b));
  return arr.filter((x) => sum - x === num).length;
}
