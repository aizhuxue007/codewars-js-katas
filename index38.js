function squares(x, n) {
  if (n < 1) return [];
  const squaresArr = [x];
  for (let i = 1; i < n; i++) {
      squaresArr.push(squaresArr[i - 1]**2);
      }
  return squaresArr;
}

function boredom(staff){
    const boredomScores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25
  };
    const totalScore = Object.values(staff).map(department => boredomScores[department]).reduce((acc, curr) => acc += curr, 0);
    return totalScore <= 80 ? 'kill me now' : totalScore > 80 && totalScore < 100 ? 'i can handle this' : 'party time!!';
}

function capitalize(s,arr){
    return s.split('').map((c, i) => arr.includes(i) ? c.toUpperCase() : c).join('');
};

function getSumOfDigits(integer) {
    let sum = 0;
    var digits =  Math.floor(integer).toString();
    for(var ix = 0; ix < digits.length; ix++) {
        sum += +digits[ix];
      };
    return sum;
}

function countLanguages(list) {
    const keys = [...new Set(list.map(developer => developer.language))];
    const vals = keys.map(language => list.filter(person => person.language === language).length);
    return Object.fromEntries(keys.map((key, index) => [key, vals[index]]));
}
