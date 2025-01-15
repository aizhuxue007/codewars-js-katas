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

function solution(str, ending) {
  return ending
    .split("")
    .every((c, i) => str.split("")[str.length - ending.length + i] === c);
}

// str.endsWith(ending);

function printerError(s) {
  return `${s.split("").filter((c) => !"abcdefghijklm".includes(c)).length}/${
    s.length
  }`;
}

function addBinary(a, b) {
  return (a + b).toString(2);
}

function nbYear(p0, percent, aug, p) {
  let inhabitants = p0;
  let years = 1;
  for (let i = 1; inhabitants < p; i++) {
    inhabitants += Math.floor(inhabitants * (percent / 100) + aug);
    years = i;
  }
  return years;
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}

var number = function (busStops) {
  return (
    busStops.reduce((acc, curr) => (acc += curr[0]), 0) -
    busStops.reduce((acc, curr) => (acc += curr[1]), 0)
  );
};

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

function factorial(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}
