function consecutive(arr, a, b) {
  const indexA = arr.indexOf(a);
  return arr[indexA + 1] === b || arr[indexA - 1] === b ? true : false;
}

function isAllPossibilities(x) {
  return x.length > 0 ? x.every((n, i) => x.includes(i)) : false;
}

function pillars(numPill, dist, width) {
  if (numPill < 2) return 0;
  if (numPill == 2) return dist * 100;
  return (numPill - 1) * dist * 100 + (numPill - 2) * width;
}

// https://www.codewars.com/kata/reviews/56d6e80ec6e24f2e15000043/groups/56d7733711262d6dbe000115
function yearDays(year) {
  const leap = `${year} has 366 days`;
  const notLeap = `${year} has 365 days`;
  if (year == 0) return leap;
  if (year % 100 == 0) return year % 400 == 0 ? leap : notLeap;
  if (year % 4 == 0) return leap;
  return notLeap;
}

const well = x => {
  const goodCount = x.filter(i => i == 'good').length
  return goodCount > 2 ? 'I smell a series!' :
    goodCount >= 1 ? 'Publish!' : 'Fail!'
}

function powersOfTwo(n) {
  const result = []
  for (let i = 0; i <= n; i++) {
    result.push(2 ** i)
  }
  return result
}

function inverseStr(arr) {
  return arr.map(c => {
    if (c == c.toLowerCase()) {
      return c.toUpperCase()
    } else if (c == c.toUpperCase()) {
      return c.toLowerCase()
    } else return c
  })
}

function reverseAndMirror(s1,s2) {
  let part1 = inverseStr(s2.split('').reverse()).join('')
  let part2 = inverseStr(s1.split('').reverse())
  return `${part1}@@@${part2.join('')}${part2.reverse().join('')}`
}

/** clean solution 
 * function reverseAndMirror(s1,s2) {
  s1 = [...s1].map(x => x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).join('')
  s2 = [...s2].map(x => x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).reverse().join('')
  return `${s2}@@@${[...s1].reverse().join('')}${s1}`
}
 */

function findMultiples(int,limit) {
  let result = []
  for (let i = int; i <= limit; i += int) {
    result.push(i)
  }
  return result
}

function removeEveryOther(arr){
  return arr.filter((element, index) => index%2 == 0)
}

const naughtyOrNice = (data) => {
  let naughtyMeter = 0
  for (month in data) {
    for (day in data[month]) {
      naughtyMeter += data[month][day] == 'Naughty' ? 1 : -1
    }
  }
  return naughtyMeter > 0 ? 'Naughty!' : 'Nice!'
}

// needs analysis
function trilingualDemocracy(group) {
  return String.fromCharCode(group.charCodeAt(0) ^ group.charCodeAt(1) ^ group.charCodeAt(2));
}

// my solution
// function trilingualDemocracy(group) {
//   const languages = {'D': 0, 'F': 0, 'I': 0, 'K': 0}
//   group.split('').forEach(language => languages[language]++)
  
//   let answer 
//   Object.keys(languages).forEach(l => {
//     if (languages[l] == 3) {
//       answer = l
//     }
//     if (languages[l] == 2) {
//       answer = group.replaceAll(l, '')
//     }
//   })
//   return answer ? answer : Object.keys(languages).filter(l => languages[l] == 0)[0]
// }
