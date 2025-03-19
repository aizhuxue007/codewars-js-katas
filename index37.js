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
