function findNumbersAndNumberwords(text) {
    let numbers = [
        'nolla', 'zero', 
        'yksi', 'one', 
        'kaksi', 'two', 
        'kolme', 'three', 
        'neljä', 'four', 
        'viisi', 'five', 
        'kuusi', 'six', 
        'seitsemän', 'seven', 
        'kahdeksan', 'eight', 
        'yhdeksän', 'nine'
    ];
    let numberCount = 0;
    let textSplit = text.split(/[.\-_ ]/);
    for (let count = 0; count < textSplit.length; count++) {
        if (textSplit[count].match(/\d/)) numberCount++;
        for (const number of numbers) {
            let lowerCaseString = textSplit[count].toLowerCase();
            if (lowerCaseString.includes(number)) numberCount++;
        }
    }
    return numberCount;
}
// add your text between the single quotes where you would like to find numbers from.
console.log(findNumbersAndNumberwords(''));