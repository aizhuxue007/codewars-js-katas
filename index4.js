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

function rainAmount(mm){
  if (mm < 40) 
    return `You need to give your plant ${40 - mm}mm of water`
  return `Your plant has had more than enough water for today!`
}

function  calculateAge(birthYear, relationYear) {
  //   if birthYear is greater than relationYear
  //    return string with birthYear - relationYear
  //   else
  //    return string with relationYear - birthYear
    let years;
    if (relationYear > birthYear) {
      years = relationYear - birthYear
      return `You are ${years} year${years > 1 ? 's': ''} old.`
    } else if (birthYear > relationYear) {
      years = birthYear - relationYear
      return `You will be born in ${years} year${years > 1 ? 's': ''}.`
    } else {
      return `You were born this very year!`;
    }
  }