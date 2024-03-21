function findFlames() {
    const name1 = document.getElementById('name1').value.toLowerCase();
    const name2 = document.getElementById('name2').value.toLowerCase();
    
    const result = document.getElementById('result');

    // Check if names are not empty
    if (name1 && name2) {
        const commonLetters = findCommonLetters(name1, name2);
        const flamesResult = getFlamesResult(commonLetters);

        result.textContent = `Flames Result: ${flamesResult}`;
    } else {
        result.textContent = 'Please enter both names.';
    }
}

function findCommonLetters(name1, name2) {
    let commonLetters = '';
    
    for (let i = 0; i < name1.length; i++) {
        const letter = name1[i];
        const index = name2.indexOf(letter);

        if (index !== -1) {
            commonLetters += letter;
            name2 = name2.slice(0, index) + name2.slice(index + 1);
        }
    }

    return commonLetters;
}

function getFlamesResult(commonLetters) {
    const flames = ['Bestie', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings'];

    while (flames.length > 1) {
        const indexToRemove = commonLetters.length % flames.length - 1;
        flames.splice(indexToRemove, 1);
    }

    return flames[0];
}
