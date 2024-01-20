function shorter_reverse_longer(a,b) {
    const aLen = a.length
    const bLen = b.length
    const shorter = aLen < bLen ? a : b;
    const longer = aLen > bLen ? a : b;
    if (aLen == bLen) return b + a.split('').reverse().join('') + b;
    return shorter + longer.split('').reverse().join('') + shorter;
}