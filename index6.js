function shorter_reverse_longer(a, b) {
  const aLen = a.length;
  const bLen = b.length;
  const shorter = aLen < bLen ? a : b;
  const longer = aLen > bLen ? a : b;
  if (aLen == bLen) return b + a.split("").reverse().join("") + b;
  return shorter + longer.split("").reverse().join("") + shorter;
}

function scrollingText(text) {
  const result = [];
  let permutation = text.split("");

  for (let i = 0; i < text.length; i++) {
    result.push(permutation.join("").toUpperCase());
    permutation.push(permutation.shift());
  }

  return result;
}

function nthChar(words) {
  return words.map((word, i) => word[i]).join("");
}

function wordPattern(word) {
  const wordProcessed = word.toLowerCase().split("");
  const wordArray = Array.from(new Set(wordProcessed));
  return wordProcessed
    .map((letter) => {
      return wordArray.indexOf(letter);
    })
    .join(".");
}

// still don't understand a bit
function catchSignChange(arr) {
  return arr.slice(1).filter((e, i) => e < 0 != arr[i] < 0).length;
}

function workNeeded(projectMinutes, freelancers) {
  const freeLancersMinutes = freelancers.reduce((acc, curr) => acc += curr[0]*60 + curr[1] ,0)
  const leftOver = projectMinutes - freeLancersMinutes
  return leftOver > 0 ? `I need to work ${Math.floor(leftOver / 60)} hour(s) and ${leftOver % 60} minute(s)` : `Easy Money!`
}