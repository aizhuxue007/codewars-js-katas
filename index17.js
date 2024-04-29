Dog.prototype.bark = () => "Woof!";

function solve(str, k) {
  for (let i = 0, n = str.length - k, max = 0; i < n + k; i++) {
    max = Math.max(max, +str.substring(i, n));
  }
}
