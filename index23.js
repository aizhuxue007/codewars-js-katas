function getNumberFromString(s) {
  return Number(s.match(/\d/gm).join(""));
}

function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!";
};

function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}
