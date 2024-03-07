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

function isTuringEquation(s) {
    let [c, b, a] = s.split('').reverse().join('').split(/[^0-9]+/).map(s => Number(s))
    return a + b === c
}

function didWeWin(plays) {
    let score = 0

    plays.forEach(play => {
        let [yards, type] = play
        if (type == 'turnover') return false
        if (type == 'sack') score -= yards
        if (type == 'run' || type == 'pass') score += yards
    })

    return score > 10
}