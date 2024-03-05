function decode(code, n) {
    const digitKey = String(n).split('').map(c => Number(c))
    return code.map((n, i) => String.fromCharCode(n - digitKey[i % digitKey.length] + 96)).join('')
}