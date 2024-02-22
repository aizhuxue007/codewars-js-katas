function consecutive(arr, a, b) {
  const indexA = arr.indexOf(a);
  return arr[indexA + 1] === b || arr[indexA - 1] === b ? true : false;
}
