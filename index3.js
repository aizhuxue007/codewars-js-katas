function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

function htmlspecialchars(formData) {
  return formData
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isPythagoreanTriple(integers) {
  let orderedInts = integers.sort((a, b) => a - b);
  return orderedInts[0] ** 2 + orderedInts[1] ** 2 === orderedInts[2] ** 2;
}

function closeCompare(a, b, m = 0) {
  return Math.abs(a - b) <= m ? 0 : Math.sign(a - b);
}

class Ship {
  constructor(draft,crew){
   this.draft = draft;
   this.crew = crew;
  }
   
   isWorthIt(){
    return this.draft - (this.crew * 1.5) > 20;
   }
}

class Cube {
  constructor(side) {
    this.setSide(side)
  }
  getSide() {
    return this.side; 
  }
  setSide(side = 0) {
    this.side = Math.abs(side);

  }
}

function duckDuckGoose(players, goose) {
  return players[(goose-1)%players.length].name
}

function derive(coefficient,exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`
}

function multiply(number){
  return number * (5 ** String(Math.abs(number)).length)
}

function sameCase(a, b){
  return ((/[a-zA-Z]/).test(a) && (/[a-zA-Z]/).test(b)) ?
    (a === a.toUpperCase() && b === b.toUpperCase()) || (a === a.toLowerCase() && b === b.toLowerCase()) ? 1 : 0 : -1;
}