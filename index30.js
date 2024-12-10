function padIt(str, n) {
  let result = [str];
  while (n > 0) {
    n % 2 === 0 ? result.push("*") : result.unshift("*");
    n--;
  }
  return result.join("");
}

function calculator(a, b, sign) {
  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
    default:
      return "unknown value";
  }
}

function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}

var ArrowFunc = function (arr) {
  return arr.map((n) => String.fromCharCode(n)).join("");
};

function parseF(s) {
  if (s === 0 || s === "0") return +0;
  return parseFloat(typeof s === "string" ? s.replace(",", ".") : s) || null;
}

function automorphic(n) {
  const squareStringReversed = String(n ** 2)
    .split("")
    .reverse();
  const nDigitsReversed = String(n).split("").reverse();
  return nDigitsReversed.every((n, i) => n === squareStringReversed[i])
    ? "Automorphic"
    : "Not!!";
}

/**
 * Better solution
 */
const automorphic2 = (n) =>
  String(n * n).endsWith(String(n)) ? "Automorphic" : "Not!!";

const adjacentElementsProduct = (array) => {
  const result = array.slice(0, array.length - 1).map((n, i) => {
    if (i < array.length) return n * array[i + 1];
  });
  return Math.max(...result);
};

function nextId(ids) {
  const uniqueIds = [...new Set(ids.sort())];
  for (let i = 0; i < uniqueIds.length; i++) {
    if (!uniqueIds.includes(i)) return i;
  }
  return uniqueIds.length;
}

function SafeInteger(n) {
  return Number.isSafeInteger(n);
}

function playerRankUp(points) {
  return points >= 100
    ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
    : false;
}

function pointsPer48(ppg, mpg) {
  return ppg !== 0 && mpg !== 0 ? Number(((ppg / mpg) * 48).toFixed(1)) : 0;
}

function howManydays(month) {
  var days;
  switch (month) {
    case 2:
      days = 28;
      break;
    case 1:
      days = 31;
      break;
    case 3:
      days = 31;
      break;
    case 5:
      days = 31;
      break;
    case 7:
      days = 31;
      break;
    case 8:
      days = 31;
      break;
    case 10:
      days = 31;
      break;
    case 12:
      days = 31;
      break;
    default:
      days = 30;
      break;
  }
  return days;
}

// function howManydays(month) {
//   switch (month) {
//     case 2:
//       return 28;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       return 30;
//   }
//   return 31;
// }
