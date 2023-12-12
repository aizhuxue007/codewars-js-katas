function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

function htmlspecialchars(formData) {
  return formData
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isPythagoreanTriple(integers) {
    let orderedInts = integers.sort((a, b) => a - b)
    return orderedInts[0] ** 2 + orderedInts[1] ** 2 === orderedInts[2] ** 2;
  }

  function closeCompare(a, b, m = 0){
    return Math.abs(a - b) <= m ? 0 : Math.sign(a - b);
  }