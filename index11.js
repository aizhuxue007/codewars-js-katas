function findGCD(a, b) {
  let temp;
  while (b != 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findLCM(a, b) {
  const gcd = findGCD(a, b);
  return (a * b) / gcd;
}

function mnLCM(m, n) {
  const max = Math.max(m, n);
  const min = Math.min(m, n);
  let lcm = 1;

  for (let i = min; i <= max; i++) {
    lcm = findLCM(lcm, i);
  }

  return lcm;
}

function findShort(s) {
  const wordLengths = s.split(" ").map((word) => word.length);
  return Math.min(...wordLengths);
}

function drawSpider(legSize, bodySize, mouth, eye) {
  const legTypes = {
    1: "^ ^",
    2: "/\\ /\\",
    3: "/╲ ╱\\",
    4: "╱╲ ╱╲",
  };
  const bodyTypes = {
    1: "( )",
    2: "(( ))",
    3: "((( )))",
  };
  let legs = legTypes[legSize].split(" ");
  let bodies = bodyTypes[bodySize].split(" ");
  let eyes = eye.repeat(2 ** bodySize / 2);
  return `${legs[0]}${bodies[0]}${eyes}${mouth}${eyes}${bodies[1]}${legs[1]}`;
}

function reverseMiddle(array) {
  let midIndex = array.length / 2 - 1;
  return array
    .slice(midIndex, array.length % 2 === 0 ? midIndex + 2 : midIndex + 3)
    .reverse();
}

function getHonorPath(honorScore, targetHonorScore) {
  if (honorScore >= targetHonorScore) return {}
  let scoreNeeded = targetHonorScore - honorScore
  return { '1kyus': Math.floor(scoreNeeded / 2), '2kyus': scoreNeeded % 2 }
}

function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq)
  return Number.isInteger(sqrt) ? (sqrt + 1) ** 2 : -1
}

function spacey(array) {
  let resultStr = ''
  return array.map(word => {
    resultStr += word
    return resultStr
  })
}

function bulbMaze(maze) {
  const even = maze.split('')
  const odd = even.map(bulb => bulb === 'x' ? 'o' : 'x')
  for (let i = 0; i < maze.length; i++) {
    if (i % 2 === 0) {
      if (even[i] === 'o') return false
    } else {
      if (odd[i] === 'o') return false
    }
  }
  return true
}

// const bulbMaze = (maze) => [].every.call(maze, (v, i) => v !== "ox"[i & 1])