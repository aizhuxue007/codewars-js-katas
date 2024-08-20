function stringClean(s) {
  const found = s.match(/\D/g);
  return found !== null ? found.join("") : "";
}

function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}

function lowercaseCount(str) {
  return str.match(/[a-z]/g)?.length ?? 0;
}

function twoHighest(arr) {
  if (arr.length < 1) return [];
  if (arr.length == 1) return arr;
  const uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
  const a1 = uniqueArr[0];
  const a2 = uniqueArr[1];
  return a1 !== a2 ? [a1, a2] : [a1];
}
