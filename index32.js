function orderOperations() {
  return (2 + 2) * (2 + 2) * 2;
}

function colorOf(r, g, b) {
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

function roundIt(n) {
  const nArray = String(n).split(".");
  if (nArray[0].length < nArray[1].length) return Math.ceil(n);
  if (nArray[0].length > nArray[1].length) return Math.floor(n);
  return Math.round(n);
}
