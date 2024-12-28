function typeValidation(variable, type) {
  return typeof variable === type;
}

function odds(values) {
  return values.filter((value) => value % 2 === 1);
}

function blackAndWhite(arr) {
  if (!Array.isArray(arr)) return "It's a fake array";
  return `It's a ${
    arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1 ? "black" : "white"
  } array`;
}

function power(x, y) {
  if (y === 0) return 1;
  let result = 1;
  for (let i = 1; i <= y; i++) {
    result *= x;
  }
  return result;
}

// x**y;

function any(arr, fun) {
  return arr.some(fun);
}

function animal(obj) {
  const { name, legs, color } = obj;
  return `This ${color} ${name} has ${legs} legs.`;
}

function circleCircumference(circle) {
  const result = 2 * Math.PI * circle.radius;
  return typeof result === "number" ? Number(result.toFixed(6)) : 0;
}

function apple(x) {
  return x ** 2 > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

function getLength(arr) {
  return arr.length;
}
function getFirst(arr) {
  return arr[0];
}
function getLast(arr) {
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  arr.push(el);
  return arr;
}
function popElement(arr) {
  arr.pop();
  return arr;
}

function dutyFree(normPrice, discount, hol) {
  const savePerBottle = normPrice * (discount / 100);
  return Math.floor(hol / savePerBottle);
}

function trueOrFalse(val) {
  if (!val) return "false";
  else return "true";
}

function solution(number) {
  if (number < 0) return 0;
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
}

const a = [];

function add(a, b) {
  return a == b;
}

function grabDoll(dolls) {
  var bag = [];

  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);
    } else {
      continue;
    }
    if (bag.length >= 3) break;
  }

  return bag;
}
