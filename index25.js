function firstNonConsecutive(arr) {
  if (arr.length < 2) return null;
  let prevNum = arr[0] - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - 1 != prevNum) return arr[i];
    prevNum++;
  }
  return null;
}

function validateCode(code) {
  const str = String(code)[0];
  return str === "1" || str === "2" || str === "3";
}

function twoSort(s) {
  return s.sort()[0].split("").join("***");
}
