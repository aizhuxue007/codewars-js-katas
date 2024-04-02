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

class Color {
  constructor() {
    this.getName();
  }

  getName() {
    throw new Error("You must implement this method");
  }
}

class Black extends Color {
  getName() {
    return "black";
  }
}

class White extends Color {
  getName() {
    return "white";
  }
}

class Red extends Color {
  getName() {
    return "red";
  }
}

class Green extends Color {
  getName() {
    return "green";
  }
}

class Blue extends Color {
  getName() {
    return "blue";
  }
}

class Magenta extends Color {
  getName() {
    return "magenta";
  }
}

class Yellow extends Color {
  getName() {
    return "yellow";
  }
}

class Cyan extends Color {
  getName() {
    return "cyan";
  }
}

function hexColor(codes) {
  const [red, green, blue] = codes.split(" ").map(Number);
  const colors = [red ? red : 0, green ? green : 0, blue ? blue : 0];
  const max = Math.max(...colors);

  if (colors.length <= 1 || colors.filter((c) => c === 0).length === 3)
    return new Black().getName();
  if (new Set(colors).size === 1) return new White().getName();

  const counts = colors.filter((color) => color === max).length;
  if (counts > 1) {
    if (red === blue) return new Magenta().getName();
    if (green === red) return new Yellow().getName();
    if (blue === green) return new Cyan().getName();
  } else {
    if (max === red) return new Red().getName();
    if (max === green) return new Green().getName();
    if (max === blue) return new Blue().getName();
  }
}
