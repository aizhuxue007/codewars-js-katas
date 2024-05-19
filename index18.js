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

function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : m * n;
}

function sortGiftCode(code) {
  return code.split("").sort().join("");
}

function balancedNum(number) {
  const strNum = String(number);
  const strLen = strNum.length;
  const splittedNum = strNum.split(
    strLen % 2
      ? strNum[Math.floor((strLen - 1) / 2)]
      : `${strNum[Math.floor(strLen / 2 - 1)]}${strNum[Math.floor(strLen / 2)]}`
  );
  const leftSum = splittedNum[0]
    .split("")
    .reduce((acc, curr) => (acc += Number(curr)), 0);
  const rightSum = splittedNum[1]
    .split("")
    .reduce((acc, curr) => (acc += Number(curr)), 0);
  return leftSum === rightSum ? "Balanced" : "Not Balanced";
}
