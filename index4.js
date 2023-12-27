function remove(s, n) {
  for (let i = 0; i < n; i++) s = s.replace("!", "");
  return s;
}

function evil(n) {
    return n.toString(2).split('').filter(binDigit => binDigit === '1').length % 2 === 0 ? "It's Evil!" : "It's Odious!"
}