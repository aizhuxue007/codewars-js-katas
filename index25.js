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

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

function billboard(name, price = 30) {
  const length = name.split("").length;
  let result = 0;
  for (let i = 0; i < length; i++) {
    result += price;
  }
  return result;
}

function main(verb, noun) {
  return verb + noun;
}

const database = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

function greet(language) {
  return database[language] || "Welcome";
}

function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const position = alphabet.indexOf(letter) + 1;
  return `Position of alphabet: ${position}`;
}
