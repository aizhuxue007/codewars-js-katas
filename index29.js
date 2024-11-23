function typeOfSum(a, b) {
  return typeof (a + b);
}

function squareArea(A) {
  return +((A / (2 * Math.PI * (1 / 4))) ** 2).toFixed(2);
}

const greet = (name, owner) => `Hello ${name === owner ? "boss" : "guest"}`;

function uefaEuro2016(teams, scores) {
  const result =
    scores[0] === scores[1]
      ? "teams played draw."
      : `${scores[0] > scores[1] ? teams[0] : teams[1]} won!`;
  return `At match ${teams[0]} - ${teams[1]}, ${result}`;
}

function giveMeFive(obj) {
  const array = [];
  for (let key in obj) {
    if (key.length === 5) array.push(key);
    if (obj[key].length === 5) array.push(obj[key]);
  }
  return array;
}

function addFive(num) {
  var total = num + 5;
  return total;
}

var rooms = {
  room1: {
    name: "hotdog",
    description: "funtimes",
    completed: false,
  },
  room2: {
    name: "hotdog2",
    description: "funtimes1",
    completed: false,
  },
  room3: {
    name: "hotdog3",
    description: "funtimes2",
    completed: true,
  },
};

function none(arr, fun) {
  return arr.every((e) => !fun(e));
}

const drinks = {
  jabroni: "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  programmer: "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  politician: "Your tax dollars",
  rapper: "Cristal",
};

function getDrinkByProfession(param) {
  return drinks[param.toLowerCase()] || "Beer";
}

let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;

function equal1() {
  let a = v1,
    b = v1;
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2() {
  let a = v4, //set number value to a
    b = v2; //set number value to b
  return a - b;
}

function equal3() {
  let a = v1, //set number value to a
    b = v5; //set number value to b
  return a * b;
}

function equal4() {
  let a = v4, //set number value to a
    b = v5; //set number value to b
  return a / b;
}

function equal5() {
  let a = v2, //set number value to a
    b = v4; //set number value to b
  return a % b;
}
