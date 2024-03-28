function withoutLast(arr) {
  return arr.slice(0, -1);
}

function canIPlay(now, start, end) {
  if (start > end) return now >= start || now < end;
  return now >= start && now < end;
}

function sortMyString(S) {
  let evens = "",
    odds = "";
  S.split("").forEach((c, i) => {
    i % 2 === 0 ? (evens += c) : (odds += c);
  });
  return evens + " " + odds;
}

function cookingTime(neededPower, minutes, seconds, power) {
  const time = Math.ceil(
    ((minutes * 60 + seconds) * parseInt(neededPower)) / parseInt(power)
  );
  return `${Math.floor(time / 60)} minutes ${time % 60} seconds`;
}
