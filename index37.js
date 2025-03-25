function tidyNumber(n){
    const nSplit = String(n).split('');
    const a = +nSplit.join('');
    const b = +nSplit.sort((a, b) => a - b).join('');
    return a === b;
}

function solve(s){
   if (s === '') return [0, 0, 0, 0];
   return [s.match(/[A-Z]/g)?.length || 0, 
           s.match(/[a-z]/g)?.length || 0, 
           s.match(/[0-9]/g)?.length || 0, 
           s.match(/[^A-Za-z0-9]/g)?.length || 0];
}

function multiplyAll(array) {
    return function(scalar) {
        return array.map(n => n*scalar);
      }
}

function min(arr, toReturn) {
    const min = Math.min(...arr);
    return toReturn === 'value' ? min : arr.indexOf(min);
}

function menFromBoys(arr){
    const uniqueArr = [...new Set(arr)];
    return [...uniqueArr.filter(n => n%2 === 0).sort((a, b) => a - b), ...uniqueArr.filter(n => Math.abs(n)%2 === 1).sort((a, b) => b - a)];
}

function last(x){
    return x.split(' ').sort((a, b) => {
        const lastA = a[a.length - 1];
        const lastB = b[b.length - 1];
        if (lastA === lastB) return 0;
        return lastA < lastB ? -1 : 1;
      });
}

var SequenceSum = (function() {
  function SequenceSum() {}

    SequenceSum.showSequence = function(count) {
        if (count < 0) return `${count}<0`;
            if (count === 0) return `0=0`;
                let resultStr = [];
                    let sum = 0;
                        for (let i = 0; i <= count; i++) {
                              resultStr.push(i);
                                    sum += i;
                                        }
                                            return resultStr.join('+') + ` = ${sum}`;
                                              };

                                                return SequenceSum;

function maxTriSum(numbers){
    const uniqueNums = [...new Set(numbers)].sort((a, b) => b - a);
    return uniqueNums.slice(0, 3).reduce((acc, curr) => acc += curr, 0);
}});
