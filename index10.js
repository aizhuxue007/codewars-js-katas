function decode(code, n) {
    const digitKey = String(n).split('').map(c => Number(c))
    return code.map((n, i) => String.fromCharCode(n - digitKey[i % digitKey.length] + 96)).join('')
}

function momentOfTimeInSpace(moment) {
    const momentArr = moment.split('')
    const time = momentArr.reduce((acc, curr) => Number(curr) ? acc += Number(curr) : acc += 0, 0)
    const space = momentArr.filter(c => !Number(c) ? true : false).length
    return [time < space, time == space, time > space]
}