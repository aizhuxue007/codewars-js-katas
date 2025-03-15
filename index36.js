function switcheroo(x){
    return x.split('').map(c => c === 'a' ? 'b' : c === 'b' ? 'a' : 'c').join('');
}

function reverseNumber(n) {
    return Math.sign(n)*Number(n.toString().split('').filter(c => c !== '-').reverse().
                  join(''));
}

function filterString(value) {
    return +value.split('').filter(c => !isNaN(c)).join('');
}

function sumTriangularNumbers(n) {
    if (n < 0) return 0;
    let triangularSum = 0;
    for (let i = 1; i <= n; i++) {
        triangularSum += i*(i + 1)/2;
      }
    return triangularSum;
}

function solve(arr) {
    return arr.map(word => 
      word.split('').filter((letter, i) => 
          'abcdefghijklmnopqrstuvwxyz'.indexOf(letter.toLowerCase()) + 1 === i + 1
        ).length
    );
}

function isRubyComing(list) {
    return list.filter(person => person.language === 'Ruby').length > 0;
}

const solve = arr => [...new Set(arr.reverse())].reverse();

function maxDiff(list) {
    return list.length === 0 ? 0 : Math.max(...list) - Math.min(...list);
};

reverse = function(array) {
    const result = []
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
      }
    return result;
}

function findLongest(array){
    let longest = 0;
    array.forEach(num => {
        if (String(num).length > String(longest).length) longest = num;
      })
    return longest;
}

const orderedCount = function (text) {
    let allLetters = [...new Set(text.split(''))];
    return allLetters.map(letter => [letter, text.split('').filter(c => c === letter).length]);
}

function greetDevelopers(list) {
    return list.map(person => ({
          ...person,
          greeting: `Hi ${person.firstName}, what do you like the most about ${person.language}?`
        })
      )
}

function nthSmallest(arr, pos){
    return arr.sort((a, b) => a - b)[pos - 1];
}

function findDigit(num, nth) {
    const reverseNum = String(num).split('').reverse();
    if (nth < 0) return -1;
    if (reverseNum.length < nth) return 0;
    if (nth === 0) return -1;
    return reverseNum[nth - 1] !== '-' ? +reverseNum[nth - 1] : 0;
}

function cubeOdd(arr) {
    if (arr.some(item => typeof item !== 'number')) return undefined;
    return arr.filter(n => Math.abs(n)%2 === 1).map(n => n**3).reduce((acc, curr) => acc += curr, 0);
}

function getFirstPython(list) {
    const firstPythonDev = list.filter(person => person.language === 'Python')[0];
    return firstPythonDev ? `${firstPythonDev.firstName}, ${firstPythonDev.country}` : 'There will be no Python developers';
}

function gps(s, x) {
    if (x.length <= 1) return 0;
    const deltaDistances = Array.from({ length: x.length - 1 }, (_, i) => x[i + 1] - x[i]);
    const avgHourlySpeeds = deltaDistances.map(deltaDistance => Math.floor((3600*deltaDistance)/s));
    return Math.max(...avgHourlySpeeds);
}
