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
