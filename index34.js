function minValue(values) {
  return +[...new Set(values)].sort().join("");
}

function capitalize(s) {
  return [
    s
      .split("")
      .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c))
      .join(""),
    s
      .split("")
      .map((c, i) => (i % 2 === 1 ? c.toUpperCase() : c))
      .join(""),
  ];
}
