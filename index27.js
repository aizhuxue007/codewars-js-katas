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
