const solution = (string) => string.split(/(?=[A-Z])/).join(" ");

const isVow = (a) =>
  a.map((n) =>
    [97, 101, 105, 111, 117].includes(n) ? String.fromCharCode(n) : n
  );
