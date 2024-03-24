function getSectionIdFromScroll(scrollY, sizes) {
  let accumulatedHeight = 0;
  for (let i = 0; i < sizes.length; i++) {
    accumulatedHeight += sizes[i];
    if (scrollY < accumulatedHeight) return i;
  }
  return -1;
}

function rounding(n, m) {
  if (!(n >= 1 || n < 10 ** 9)) return null;
  if (!(m >= 3 || m < 10 ** 9)) return null;
  if (m / n === 2) return n;
  let remainder = n % m;
  if (2 * remainder === m) {
    return n;
  }

  let lowerMultiple = n - remainder;
  let upperMultiple = n - remainder + m;

  if (n - lowerMultiple < upperMultiple - n) {
    return lowerMultiple;
  } else {
    return upperMultiple;
  }
}

function SeriesSum(n) {
  for (var s = 0, i = 1; i <= n; i++) {
    s += 1 / (3 * i - 2);
  }
  return s.toFixed(2);
}

function List() {
  this.countSpecDigits = function (integersList, digitsList) {
    let result = [];
    for (let i = 0; i < digitsList.length; i++) {
      let digit = digitsList[i];
      result.push([digit, integersList.join().split(digit).length - 1]);
    }
    return result;
  };
}

function tacofy(word) {
  const ingredients = {
    a: "beef",
    e: "beef",
    i: "beef",
    o: "beef",
    u: "beef",
    t: "tomato",
    l: "lettuce",
    c: "cheese",
    g: "guacamole",
    s: "salsa",
  };
  const result = ["shell"];
  word
    .toLowerCase()
    .split("")
    .forEach((c) => {
      let ingredient = ingredients[c];
      if (ingredient) result.push(ingredient);
    });
  result.push("shell");
  return result;
}

// function tacofy(word) {
//   var map = {
//     t: "tomato",
//     l: "lettuce",
//     c: "cheese",
//     g: "guacamole",
//     s: "salsa",
//     a: "beef",
//     e: "beef",
//     i: "beef",
//     o: "beef",
//     u: "beef",
//   };
//   return [
//     "shell",
//     ...[...word].map((x) => map[x.toLowerCase()]).filter((x) => x),
//     "shell",
//   ];
// }

function isItLetter(character) {
  return /[a-z]/i.test(character);
}
