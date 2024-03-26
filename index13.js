function withoutLast(arr) {
  return arr.slice(0, -1);
}

function canIPlay(now, start, end) {
  if (start > end) return now >= start || now < end;
  return now >= start && now < end;
}
