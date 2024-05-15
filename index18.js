function giveChange(amount) {
  const result = [0, 0, 0, 0, 0, 0];
  const bills = { 0: 1, 1: 5, 2: 10, 3: 20, 4: 50, 5: 100 };
  for (let i = 5; i >= 0; i--) {
    let coeff = Math.floor(amount / bills[`${i}`]);
    if (amount > 0) {
      amount -= coeff * bills[`${i}`];
      result[i] += coeff;
    }
  }
  return result;
}
