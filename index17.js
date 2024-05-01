Dog.prototype.bark = () => "Woof!";

function solve(str, k) {
  for (let i = 0, n = str.length - k, max = 0; i < n + k; i++) {
    max = Math.max(max, +str.substring(i, n));
  }
}

function changeMe(moneyIn) {
  const acceptedMoney = {
    "£5": "20p ".repeat(25).trim(),
    "£2": "20p ".repeat(10).trim(),
    "£1": "20p ".repeat(5).trim(),
    "50p": "20p 20p 10p",
    "20p": "10p 10p",
  };
  if (!(moneyIn in acceptedMoney)) return moneyIn;
  return acceptedMoney[moneyIn];
}

function ghostBusters(building) {
  if (!building.includes(" "))
    return "You just wanted my autograph didn't you?";
  return building.replaceAll(" ", "");
}
