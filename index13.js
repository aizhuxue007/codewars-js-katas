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

function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 3600);
}

/** Analysis and Rewrite from Memory */
// function interweave(s1, s2) {
//   let s = '', l = Math.max(s1.length, s2.length);
//   for(let i = 0; i < l; i++) {
//     if(s1[i]) s += s1[i];
//     if(s2[i]) s += s2[i];
//   }
//   return s.replace(/\d/g,'').trim();
// }

function pofi(n) {
  return ["1", "i", "-1", "-i"][n % 4];
}

function matrix(array) {
  return array.map((row, i) => {
    const newRow = [...row];
    newRow[i] = row[i] < 0 ? 0 : 1;
    return newRow;
  });
}
