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
