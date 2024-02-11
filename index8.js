function boolToWord(bool) {
    return bool ? 'Yes' : 'No';
}

function isPangram(string) {
    const normalizedStr = string.toLowerCase()
    for (let charCode = 97; charCode <= 122; charCode++) {
        const char = String.fromCharCode(charCode)
        if (!normalizedStr.includes(char)) return false
    }
    return true
}


function flipNumber(string) {
    let out = []
    let chars = string.split('')

    while (chars.length) {
        out.push(chars.reverse().shift())
    }

    return out.join('')
}