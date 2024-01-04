function remove(s, n) {
  for (let i = 0; i < n; i++) s = s.replace("!", "");
  return s;
}

function evil(n) {
  return n.toString(2).split('').filter(binDigit => binDigit === '1').length % 2 === 0 ? "It's Evil!" : "It's Odious!"
}

function esrever(s) {
  return s.slice(0, -1).split('').reverse().join + s.slice(-1)
}

var humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears === 1) return [1, 15, 15]
  if (humanYears === 2) return [2, 24, 24]
  return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24]
}

var cubeChecker = function (volume, side) {
  return side ** 3 === volume && side > 0;
};

function rainAmount(mm) {
  if (mm < 40)
    return `You need to give your plant ${40 - mm}mm of water`
  return `Your plant has had more than enough water for today!`
}

function calculateAge(birthYear, relationYear) {
  let years;
  if (relationYear > birthYear) {
    years = relationYear - birthYear
    return `You are ${years} year${years > 1 ? 's' : ''} old.`
  } else if (birthYear > relationYear) {
    years = birthYear - relationYear
    return `You will be born in ${years} year${years > 1 ? 's' : ''}.`
  } else {
    return `You were born this very year!`;
  }
}

function alphabetPosition(text) {
  return text.split('').filter(char => char.toLowerCase().match(/[a-z]/i) ? char.toLowerCase() : '').map(letter => letter.toLowerCase().charCodeAt(0) - 96)
    .join(' ');
}

function fuelPrice(litres, pricePerLitre) {
  let discount
  if (litres > 8) discount = 0.25
  else if (litres >= 6) discount = 0.20
  else if (litres >= 4) discount = 0.10
  else if (litres >= 2) discount = 0.05
  else discount = 0
  // return total cost of litres times (pricePerLitre - discount), rounded to nearest 2 decimal places
  return parseFloat((litres * (pricePerLitre - discount)).toFixed(2))
}

/** Best solution for fuelPrice */
// function fuelPrice(litres, pricePerLiter) {
//   for (var i = 2; i <= 10; i +=2) { //discount loop
//     if (litres >= i) {
//       pricePerLiter -= 0.05;
//     }
//   }
//   return Math.round(litres * pricePerLiter * 100) / 100;;
// }

var quote = function(fighter) {
    if (fighter.toLowerCase() === "george saint pierre") return "I am not impressed by your performance.";
    if (fighter.toLowerCase() === "conor mcgregor") return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
};