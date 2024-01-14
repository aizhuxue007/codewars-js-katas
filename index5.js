function leo(oscar) {
  if (oscar === 88) return "Leo finally won the oscar! Leo is happy";
  if (oscar === 86) return "Not even for Wolf of wallstreet?!";
  if (oscar < 88) return "When will you give Leo an Oscar?";
  if (oscar > 88) return "Leo got one already!";
}

function slope(points) {
  const rise = points[1] - points[3];
  const run = points[0] - points[2];
  if (run == 0) return "undefined";
  return String(rise / run);
}

function remove(string) {
  let strArr = string.split("");
  for (let i = string.length - 1; strArr[i] == "!"; i--) {
    strArr.pop();
  }
  return strArr.join("");
}

function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

function maps(x) {
  return x.map((num) => num * 2);
}

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

function createPhoneNumber(numbers) {
  const areaCode = numbers.slice(0, 3).join("");
  const telephonePrefix = numbers.slice(3, 6).join("");
  const lineNumber = numbers.slice(6).join("");
  return `(${areaCode}) ${telephonePrefix}-${lineNumber}`;
}

const binaryArrayToNumber = (arr) => {
  const binString = arr.join("");
  return parseInt(binString, 2);
};

function invert(array) {
  return array.map((num) => num * -1);
}

function accum(s) {
  return s
    .split("")
    .map(
      (letter, index) =>
        letter.toUpperCase() + letter.toLowerCase().repeat(index)
    )
    .join("-");
}

function candies(kids) {
  const max = Math.max(...kids)
  if (kids.length < 2) return -1;
  return kids.reduce((acc, kid) => acc + (max - kid)
    , 0)
}
