function leo(oscar) {
  if (oscar === 88) return "Leo finally won the oscar! Leo is happy";
  if (oscar === 86) return "Not even for Wolf of wallstreet?!";
  if (oscar < 88) return "When will you give Leo an Oscar?";
  if (oscar > 88) return "Leo got one already!";
}

function slope(points) {
  const rise = points[1] - points[3];
  const run = points[0] - points[2];
  if (run == 0) return "undefined";
  return String(rise / run);
}

function remove(string) {  
  let strArr = string.split('')
  for (let i = string.length - 1; strArr[i] == '!'; i--) {
    strArr.pop()
  }
  return strArr.join('')
}