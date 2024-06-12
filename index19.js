function differenceOfSquares(n) {
  let sum = 0;
  let squares = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
    squares += i ** 2;
  }
  return sum ** 2 - squares;
}

function spot(s1, s2) {
  const diffs = [];
  s1.split("").forEach((e, i) => {
    if (e !== s2[i]) diffs.push(i);
  });
  return diffs;
}

function divCon(x) {
  return x.reduce(
    (acc, curr) =>
      typeof curr === "string" ? (acc -= Number(curr)) : (acc += curr),
    0
  );
}

// function divCon(x){
//   return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
// }

function trigrams(phrase) {
  if (phrase.length < 3) return "";
  const trigram = [];
  for (let i = 0; i <= phrase.length - 3; i++) {
    trigram.push(phrase.substring(i, i + 3).replaceAll(" ", "_"));
  }
  return trigram.join(" ");
}

var isAnagram = function (test, original) {
  if (test.length !== original.length) return false;
  const originalArr = original.split("").map((c) => c.toLowerCase());
  const testArr = test.split("").map((c) => c.toLowerCase());
  for (let i = 0; i < test.length; i++) {
    if (originalArr.includes(testArr[i])) {
      originalArr.splice(originalArr.indexOf(testArr[i]), 1);
    } else {
      return false;
    }
  }
  return true;
};

// var isAnagram = function(test, original) {
//   var t = test.toLowerCase().split('').sort().join('');
//   var o = original.toLowerCase().split('').sort().join('');
//   return (t==o)?true:false;
// };

function rentalCarCost(d) {
  const costPerDay = 40;
  const total = costPerDay * d;
  if (d >= 7) return total - 50;
  else if (d >= 3) return total - 20;
  else return total;
}

function getSize(width, height, depth) {
  return [
    2 * (width * height + height * depth + width * depth),
    width * height * depth,
  ];
}

function toNumberArray(stringarray) {
  return stringarray.map((str) => Number(str));
}

// function sorter(textbooks) {
//   return textbooks.sort((a, b) =>
//     a.toLowerCase() > b.toLowerCase()
//       ? 1
//       : a.toLowerCase() < b.toLowerCase()
//       ? -1
//       : 0
//   );
// }

var a1 = "A",
  a2 = "a",
  b1 = "B",
  b2 = "b",
  c1 = "C",
  c2 = "c",
  d1 = "D",
  d2 = "d",
  e1 = "E",
  e2 = "e",
  n1 = "N",
  n2 = "n";
function Dad() {
  return d1 + a2 + d2;
}
function Bee() {
  return b1 + e2 + e2;
}
function banana() {
  return b2 + a2 + n2 + a2 + n2 + a2;
}

function answer1() {
  return "no";
}
function answer2() {
  return "no";
}
function answer3() {
  return "yes";
}
