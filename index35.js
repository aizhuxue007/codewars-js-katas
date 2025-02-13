function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    return Math.floor(Math.sqrt(age1**2 + age2**2 + age3**2 + age4**2 + age5**2 + age6**2 + age7**2 + age8**2)/2); 
}

function isSortedAndHow(array) {
    const ascendedArray = JSON.stringify([...array].sort((a, b) => a - b));
    const descendedArray = JSON.stringify([...array].sort((a, b) => b - a));
    const arrayContents = JSON.stringify(array);
    return arrayContents === ascendedArray ? "yes, ascending" : arrayContents === descendedArray ? "yes, descending" : "no";
}
