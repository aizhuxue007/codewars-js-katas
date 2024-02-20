function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

function isPangram(string) {
  const normalizedStr = string.toLowerCase();
  for (let charCode = 97; charCode <= 122; charCode++) {
    const char = String.fromCharCode(charCode);
    if (!normalizedStr.includes(char)) return false;
  }
  return true;
}

function flipNumber(string) {
  let out = [];
  let chars = string.split("");

  while (chars.length) {
    out.push(chars.reverse().shift());
  }

  return out.join("");
}

function flickSwitch(arr) {
  let toggle = true;
  return arr.map((item) => {
    return item === "flick" ? (toggle = !toggle) : toggle;
  });
}

const combineNames = (...names) => names.join(" ");

function removeSmallest(numbers) {
  const copyNumbers = [...numbers];
  const min = Math.min(...numbers);
  copyNumbers.splice(copyNumbers.indexOf(min), 1);
  return copyNumbers;
}

function solve(a, b) {
  let aScore = 0,
    bScore = 0;
  for (let i = 0; i < 3; i++) {
    a[i] > b[i] ? aScore++ : a[i] < b[i] ? bScore++ : null;
  }
  if (aScore === bScore)
    return `${aScore}, ${bScore}: that looks like a "draw"! Rock on!`;
  return `${aScore}, ${bScore}: ${
    aScore > bScore ? 'Alice made "Kurt" proud!' : 'Bob made "Jeff" proud!'
  }`;
}

function monkeyCount(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

function rounders(value) {
  const digits = String(value).split("").map(Number).reverse();
  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] >= 5) {
      digits[i + 1] += 1;
    }
    digits[i] = 0;
  }
  return Number(digits.reverse().join(""));
}

function rounders(value, e = 1) {
  return value < 10 ? value * e : rounders(Math.round(value / 10), e * 10);
}

function fizzBuzzCuckooClock(time) {
    const [ hours, minutes ] = time.split(':')
    if (minutes === '30') { return 'Cuckoo'}
    else if (minutes != '00') {
      if (minutes%3 == 0 && minutes%5 == 0) return 'Fizz Buzz'
      else if (minutes%3 == 0) return 'Fizz'
      else if (minutes%5 == 0 ) return 'Buzz'
      else return 'tick'
    } else {
      let result = ''
      let cuckoos = hours%12 == 0 ? 12 : hours%12
      while (cuckoos > 0) {
         result += 'Cuckoo '
         cuckoos--
      }
      return result.trim()
    }
  }