function orderOperations() {
  return (2 + 2) * (2 + 2) * 2;
}

function colorOf(r, g, b) {
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

function roundIt(n) {
  const [a, b] = String(n).split(".");
  if (a.length < b.length) return Math.ceil(n);
  if (a.length > b.length) return Math.floor(n);
  return Math.round(n);
}

function descendingOrder(n) {
  return +String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

const getMiddle = (s) =>
  s.length % 2 === 0
    ? `${s[s.length / 2 - 1]}${s[s.length / 2]}`
    : `${s[Math.floor(s.length / 2)]}`;

function friend(friends) {
  return friends.filter((person) => person.length === 4);
}

function cutCube(volume, n) {
  return Number.isInteger(Math.cbrt(n))
    ? Number.isInteger(Math.cbrt(volume / n))
    : false;
}

const filterLetters = (arr) =>
  arr.split("").filter((c) => "abcdefghijklmnopqrstuvwxyz");

function longest(s1, s2) {
  const soup = filterLetters(s1).concat(filterLetters(s2));
  return [...new Set(soup)].sort().join("");
}
