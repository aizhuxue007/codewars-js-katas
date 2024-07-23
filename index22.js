function reverseLetter(str) {
  return str
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .reverse()
    .join("");
}

function getLargerNumbers(a, b) {
  return a.map((n, i) => Math.max(n, [b[i]]));
}

const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;
  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};

// function sort(arr1, arr2) {
//   const result = new Array(arr1.length);
//   for (let i = 0; i < arr2.length; i++) {
//     result[arr2[i]] = arr1[i];
//   }
//   return result;
// }

function countRedBeads(n) {
  if (n < 2) return 0;
  return (n - 1) * 2;
}

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// const notesArray = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

// function getNote(pitch) {
//    let index = Math.round(12 * Math.log2(pitch / 440)) % 12;
//    if (index < 0) index += 12;
//    return notesArray[index];
// }

function checkThreeAndTwo(array) {
  let checkA = array.filter((c) => c === "a").length;
  let checkB = array.filter((c) => c === "b").length;
  let checkC = array.filter((c) => c === "c").length;
  return (
    (checkA === 3 || checkB === 3 || checkC === 3) &&
    (checkA === 2 || checkB === 2 || checkC === 2)
  );
}

function problem(x) {
  return typeof x === "string" ? "Error" : x * 50 + 6;
}

const nextTrafficColor = {
  green: "yellow",
  yellow: "red",
  red: "green",
};

function updateLight(current) {
  return nextTrafficColor[current];
}
