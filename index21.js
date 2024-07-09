function sumNoDuplicates(numList) {
  if (numList < 1) return 0;
  const uniques = [...new Set(numList)].filter(
    (val) => numList.indexOf(val) === numList.lastIndexOf(val)
  );
  return uniques.length < 1 ? 0 : uniques.reduce((acc, curr) => (acc += curr));
}

// function squeakyClean(arr) {
//   return arr.filter(Boolean);
// }

function squeakyClean(arr) {
  return arr.filter(
    (item) =>
      !(item === "" || item === 0 || item === null || item === undefined)
  );
}

function generateShape(integer) {
  let result = [];
  const pluses = new Array(integer).fill("+").join("");
  for (let i = 1; i <= integer; i++) {
    result.push(pluses);
  }
  return result.join("\n");
}

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

function xor(a, b) {
  return (a || b) && a !== b;
}

function combat(health, damage) {
  const newHealth = health - damage;
  return newHealth > 0 ? newHealth : 0;
}

function correct(string) {
  return string
    .split("")
    .map((c) => {
      if (c === "5") {
        return "S";
      } else if (c === "0") {
        return "O";
      } else if (c === "1") {
        return "I";
      } else {
        return c;
      }
    })
    .join("");
}

Object.freeze(MrFreeze);

function contamination(text, char) {
  return char.repeat(text.length);
}
