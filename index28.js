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

class Person {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((bird) => !geese.includes(bird));
}

class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}

function describeAge(age) {
  return `You're a(n) ${
    age <= 12 ? "kid" : age <= 17 ? "teenager" : age <= 64 ? "adult" : "elderly"
  }`;
}

function saleHotdogs(n) {
  return (n < 5 ? 100 : n < 10 ? 95 : 90) * n;
}

function helloWorld() {
  const str = "Hello World!";
  console.log(str);
}

function multiTable(number) {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}\n`;
  }
  return table.substring(0, table.length - 1);
}

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

var websites = [];

for (let i = 0; i < 1000; i++) {
  websites.push("codewars");
}

function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}

var Ball = function (ballType) {
  this.ballType = ballType === "super" ? "super" : "regular";
};
