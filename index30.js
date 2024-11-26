function padIt(str, n) {
  let result = [str];
  while (n > 0) {
    n % 2 === 0 ? result.push("*") : result.unshift("*");
    n--;
  }
  return result.join("");
}
