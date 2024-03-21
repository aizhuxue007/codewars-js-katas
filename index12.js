function getSectionIdFromScroll(scrollY, sizes) {
    let accumulatedHeight = 0
    for (let i = 0; i < sizes.length; i++) {
        accumulatedHeight += sizes[i]
        if (scrollY < accumulatedHeight) return i
    }
    return -1
}

function rounding(n, m) {
    if (!(n >= 1 || n < 10 ** 9)) return null
    if (!(m >= 3 || m < 10 ** 9)) return null
    if (m / n === 2) return n
    let remainder = n % m;
    if (2 * remainder === m) {
        return n;
    }

    let lowerMultiple = n - remainder;
    let upperMultiple = (n - remainder) + m;

    if ((n - lowerMultiple) < (upperMultiple - n)) {
        return lowerMultiple;
    } else {
        return upperMultiple;
    }
}

function SeriesSum(n) {
    for (var s = 0, i = 1; i <= n; i++) {
        s += 1 / (3 * i - 2)
    }

    return s.toFixed(2)
}