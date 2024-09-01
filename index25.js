function firstNonConsecutive(arr) {
  if (arr.length < 2) return null;
  let prevNum = arr[0] - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - 1 != prevNum) return arr[i];
    prevNum++;
  }
  return null;
}
