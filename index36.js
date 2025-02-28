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
