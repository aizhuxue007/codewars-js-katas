
function tidyNumber(n){
    const nSplit = String(n).split('');
    const a = +nSplit.join('');
    const b = +nSplit.sort((a, b) => a - b).join('');
    return a === b;
}
