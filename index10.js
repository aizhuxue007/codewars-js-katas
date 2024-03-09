function decode(code, n) {
  const digitKey = String(n)
    .split("")
    .map((c) => Number(c));
  return code
    .map((n, i) => String.fromCharCode(n - digitKey[i % digitKey.length] + 96))
    .join("");
}

function momentOfTimeInSpace(moment) {
  const momentArr = moment.split("");
  const time = momentArr.reduce(
    (acc, curr) => (Number(curr) ? (acc += Number(curr)) : (acc += 0)),
    0
  );
  const space = momentArr.filter((c) => (!Number(c) ? true : false)).length;
  return [time < space, time == space, time > space];
}

function isTuringEquation(s) {
  let [c, b, a] = s
    .split("")
    .reverse()
    .join("")
    .split(/[^0-9]+/)
    .map((s) => Number(s));
  return a + b === c;
}

function didWeWin(plays) {
  let score = 0;

  plays.forEach((play) => {
    let [yards, type] = play;
    if (type == "turnover") return false;
    if (type == "sack") score -= yards;
    if (type == "run" || type == "pass") score += yards;
  });

  return score > 10;
}

// Need to analysis, rewrites
const ownedCatAndDog = (catYears, dogYears) =>
  [
    catYears < 24 ? catYears / 15 : (catYears - 16) / 4,
    dogYears < 24 ? dogYears / 15 : (dogYears - 14) / 5,
  ].map(Math.floor);

function findMaterialOccurences(arr, item) {
  return arr.filter((material) => material === item).length;
}

function stonePick(arr) {
  let cobblestones = findMaterialOccurences(arr, "Cobblestone");
  let sticks =
    findMaterialOccurences(arr, "Sticks") +
    findMaterialOccurences(arr, "Wood") * 4;
  let pickaxes = 0;

  while (cobblestones >= 3 && sticks >= 2) {
    pickaxes++;
    cobblestones -= 3;
    sticks -= 2;
  }

  return pickaxes;
}
