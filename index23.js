function getNumberFromString(s) {
  return Number(s.match(/\d/gm).join(""));
}

function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!";
};
