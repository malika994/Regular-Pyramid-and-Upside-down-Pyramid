


function pyramid(patternChar, numOfRows, isTrueOrFalse) {
    let n = numOfRows;
    let line;
    //Regular Pyramid:
    if (isTrueOrFalse == true) {
        line = '';
        for (let i = 1; i <= n; i++) {
            line += ' '.repeat(n - i);
            line += patternChar.repeat(i + i - 1) + '\n';
        }
    }
    //Upside Down Pyramid:
    else if (isTrueOrFalse == false) {
        line = '';
        for (let i = n; i >= 1; i--) {
            line += ' '.repeat(n - i);
            line += patternChar.repeat(i + i - 1) + '\n';
        }

    }
    return line;
}
console.log("Regular Pyramid: \n" + pyramid('o', 4, true));
console.log("Upside Down Pyramid: \n" + pyramid('o', 4, false));


