function remove(s, n) {
  for (let i = 0; i < n; i++) s = s.replace("!", "");
  return s;
}

function evil(n) {
  return n.toString(2).split('').filter(binDigit => binDigit === '1').length % 2 === 0 ? "It's Evil!" : "It's Odious!"
}

function esrever(s) {
  return s.slice(0, -1).split('').reverse().join + s.slice(-1)
}

var humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears === 1) return [1, 15, 15]
  if (humanYears === 2) return [2, 24, 24]
  return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24]
}

var cubeChecker = function (volume, side) {
  return side ** 3 === volume && side > 0;
};