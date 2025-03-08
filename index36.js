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
