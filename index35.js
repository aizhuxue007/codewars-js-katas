function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    return Math.floor(Math.sqrt(age1**2 + age2**2 + age3**2 + age4**2 + age5**2 + age6**2 + age7**2 + age8**2)/2); 
}

function isSortedAndHow(array) {
    const ascendedArray = JSON.stringify([...array].sort((a, b) => a - b));
    const descendedArray = JSON.stringify([...array].sort((a, b) => b - a));
    const arrayContents = JSON.stringify(array);
    return arrayContents === ascendedArray ? "yes, ascending" : arrayContents === descendedArray ? "yes, descending" : "no";
}

/** function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
    arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
} **/
function bump(x){
    return x.split('').filter(c => c === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';
}

function fizzbuzz(n)
  {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i%3 === 0 && i%5 === 0) {
            result.push('FizzBuzz');
          } else if (i%3 === 0) {
            result.push('Fizz');
          } else if (i%5 === 0) {
            result.push('Buzz');
          } else {
            result.push(i);
          }
      }
    return result;
}
