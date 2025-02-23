function switcheroo(x){
    return x.split('').map(c => c === 'a' ? 'b' : c === 'b' ? 'a' : 'c').join('');
}
