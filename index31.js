function typeValidation(variable, type) {
  return typeof variable === type;
}

function odds(values) {
  return values.filter((value) => value % 2 === 1);
}

function blackAndWhite(arr) {
  if (!Array.isArray(arr)) return "It's a fake array";
  return `It's a ${
    arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1 ? "black" : "white"
  } array`;
}
