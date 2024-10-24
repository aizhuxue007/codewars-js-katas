const solution = (string) => string.split(/(?=[A-Z])/).join(" ");

const isVow = (a) =>
  a.map((n) =>
    [97, 101, 105, 111, 117].includes(n) ? String.fromCharCode(n) : n
  );

const polishToEnglish = {
  ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ó: "o",
  ś: "s",
  ź: "z",
  ż: "z",
};

function correctPolishLetters(string) {
  return string
    .split("")
    .map((c) => polishToEnglish[c] || c)
    .join("");
}
