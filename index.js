function repeatStr (n, s) {
    return s.repeat(n);
}
  
function grow(x) {
    return x.reduce((acc, current) => {
      return acc * current;
    })
  }