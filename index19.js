function differenceOfSquares(n) {
  let sum = 0;
  let squares = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
    squares += i ** 2;
  }
  return sum ** 2 - squares;
}

function spot(s1, s2) {
  const diffs = [];
  s1.split("").forEach((e, i) => {
    if (e !== s2[i]) diffs.push(i);
  });
  return diffs;
}

function divCon(x) {
  return x.reduce(
    (acc, curr) =>
      typeof curr === "string" ? (acc -= Number(curr)) : (acc += curr),
    0
  );
}

// function divCon(x){
//   return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
// }

function trigrams(phrase) {
  if (phrase.length < 3) return "";
  const trigram = [];
  for (let i = 0; i <= phrase.length - 3; i++) {
    trigram.push(phrase.substring(i, i + 3).replaceAll(" ", "_"));
  }
  return trigram.join(" ");
}
