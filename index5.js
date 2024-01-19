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
  const max = Math.max(...kids);
  if (kids.length < 2) return -1;
  return kids.reduce((acc, kid) => acc + (max - kid), 0);
}

function isItANum(str) {
  const numbers = str.match(/(\d+)/g).join("");
  return numbers.match(/^0\d{10}$/g) ? numbers : "Not a phone number";
}

function filter_list(l) {
  return l.filter(item => Number.isInteger(item))
}

function isValidWalk(walk) {
  function count(val) {
    return walk.filter(item => item == val).length
  }

  return walk.length == 10 && count('n') == count('s') && count('w') == count('e')
}

function solution(str) {
  return str.split('').reverse().join('')
}

function disemvowel(str) {
  const consonants = /[^aeiou]/gi
  return str.match(consonants).join('')
}

function likes(names) {
  switch (names.length) {
    case 0: return "no one likes this"
    case 1: return `${names[0]} likes this`
    case 2: return `${names[0]} and ${names[1]} like this`
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`
    default: return `${names[0]}, ${names[1]} and ${names.slice(2).length} others like this`
  }
}

function highAndLow(numbers) {
  const numbersArr = numbers.split(' ')
  const max = Math.max(...numbersArr)
  const min = Math.min(...numbersArr)
  return `${max} ${min}`
}