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
