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
