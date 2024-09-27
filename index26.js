const reverseSeq = (n) => {
  const arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

function enough(cap, on, wait) {
  const result = on + wait - cap;
  return result > 0 ? result : 0;
}

function sayHello(name) {
  return `Hello, ${name}`;
}

function stringToArray(string) {
  return string.split(" ");
}

function all(arr, fun) {
  return arr.every(fun);
}

function Hero(name = "Hero") {
  this.name = name;
  this.position = "00";
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

function howManyDalmatians(number) {
  var dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!",
  ];
  var respond =
    number <= 10
      ? dogs[0]
      : number <= 50
      ? dogs[1]
      : number == 101
      ? dogs[3]
      : dogs[2];
  return respond;
}

solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  return (
    ((givenMass1 / molarMass1 + givenMass2 / molarMass2) *
      0.082 *
      (temp + 273.15)) /
    volume
  );
};
