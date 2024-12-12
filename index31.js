function typeValidation(variable, type) {
  return typeof variable === type;
}

function odds(values) {
  return values.filter((value) => value % 2 === 1);
}
