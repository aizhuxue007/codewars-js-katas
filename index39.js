function averages(numbers) {
    if (!numbers || numbers.length < 2) return [];
    const result = Array.from({ length: numbers.length - 1}, (_, i) => (numbers[i] + numbers[i + 1]) / 2);
    return result;
}
