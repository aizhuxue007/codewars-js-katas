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

function getGrade(s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
}

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  const blueLeft = blueStart - bluePulled;
  const redLeft = redStart - redPulled;
  const totalLeft = blueLeft + redLeft;
  return blueLeft / totalLeft;
}
