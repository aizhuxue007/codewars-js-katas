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

function digits(n) {
    return String(n).length;
}

function sumCubes(n){
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i**3;
      }
    return sum;
}

var greet = function(name) {
    return `Hello ${name[0].toUpperCase()}${name.substring(1).toLowerCase()}!`
};

class Block{

    constructor(data){
        const [width, length, height] = data;
        this.width = width;
        this.height = height;
        this.length = length;
      }
    
    getWidth() {
        return this.width;
      }
    
    getLength() {
        return this.length;
      }
    
    getHeight() {
        return this.height;
      }
    
    getVolume() {
        return this.width*this.length*this.height;
      }
    
    getSurfaceArea() {
        return 2*this.width*this.length + 2*this.length*this.height + 2*this.height*this.width;
      }
}

function vowelIndices(word){
    const result = [];
    for (let i = 0; i < word.length; i++) {
        if ('aeiouy'.includes(word[i].toLowerCase())) result.push(i + 1);
      }
    return result;
}
