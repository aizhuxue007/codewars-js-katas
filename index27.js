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
