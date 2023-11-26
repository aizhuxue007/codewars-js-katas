function isDigit(s) {
    return s == parseFloat(s);
}

function sumMul(n,m){
    if (n >= m) return 'INVALID';
    
    let sum = 0;
    for (let i = n; i < m; i += n) {
      sum += i;
    }
    return sum;
}

const flip=(d, a)=>{
  if (d === 'R') return a.sort((x, y) => x - y );
  if (d === 'L') return a.sort((x, y) => y - x );
}

var findAverage = function (nums) {
  return nums.reduce((acc, curr) => acc + curr) / nums.length;
}

function addLength(str) {
  return str.split(" ").map(word => word + ` ${word.length}`);
}

var Ghost = function() {
  let colors = ['white', 'yellow', 'purple', 'red'];
  this.color = colors[Math.floor(Math.random() * 4)];
}

function move (position, roll) {
  return position + roll * 2;
}