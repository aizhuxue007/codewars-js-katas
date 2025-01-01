function orderOperations() {
  return (2 + 2) * (2 + 2) * 2;
}

function colorOf(r, g, b) {
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

function roundIt(n) {
  const [a, b] = String(n).split(".");
  if (a.length < b.length) return Math.ceil(n);
  if (a.length > b.length) return Math.floor(n);
  return Math.round(n);
}

function descendingOrder(n) {
  return +String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
