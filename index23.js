function getNumberFromString(s) {
  return Number(s.match(/\d/gm).join(""));
}
