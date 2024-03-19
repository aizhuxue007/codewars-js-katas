function getSectionIdFromScroll(scrollY, sizes) {
    let accumulatedHeight = 0
    for (let i = 0; i < sizes.length; i++) {
        accumulatedHeight += sizes[i]
        if (scrollY < accumulatedHeight) return i
    }
    return -1
}