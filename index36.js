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
