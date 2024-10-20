function shortcut(string) {
  return string
    .split("")
    .filter((c) => !"aeiou".includes(c))
    .join("");
}

function opposite(number) {
  return -1 * number;
}

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

function joinStrings(string1, string2) {
  return `${string1} ${string2}`;
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

function greet() {
  return "hello world!";
}

function unusualFive() {
  const arr = ["", "", "", "", ""];
  return arr.length;
}

function howManySmaller(arr, n) {
  return arr.filter((dec) => +dec.toFixed(2) < n).length;
}

function chromosomeCheck(sperm) {
  return sperm.split("")[1] === "Y"
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}

function chromosomeCheckBetter(sperm) {
  return `Congratulations! You're going to have a ${
    sperm === "XY" ? "son" : "daughter"
  }.`;
}

function litres(time) {
  return Math.floor(time * 0.5);
}

function checkForFactor(base, factor) {
  return base % factor === 0;
}

const setAlarm = (employed, vacation) => employed && !vacation;

const century = (year) => Math.ceil(year / 100);

const noSpace = (x) => x.split(" ").join("");

const square = (x) => x ** 2;

function otherAngle(a, b) {
  return 180 - a - b;
}

function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
  }
}

function plural(n) {
  return !(n === 1);
}
