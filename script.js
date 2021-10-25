let getNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let checkAndAddNumber = function(mass, result) {
    let numberCandidate = mass[getNumber(0, mass.length - 1)];
    if (result.indexOf(numberCandidate) == -1) {
        return numberCandidate;
    }
    return checkAndAddNumber(mass, result);
}

function multi() {
    let result = [];
    const numbersToGuess = Number(document.getElementById('numbersToGuess').value);
    const overallNumbers = Number(document.getElementById('overallNumbers').value);

    for (let i = 1; i <= numbersToGuess; i++ ) {
        let randomNumbers1 = [];
        let randomNumbers2 = [];    
        const randomNumbersQuantity1 = getNumber(3, 9);
        const randomNumbersQuantity2 = getNumber(3, 9);

        const numberStart = Math.floor(overallNumbers / numbersToGuess * (i - 1) + 1);
        const numberEnd = Math.floor(overallNumbers / numbersToGuess * i);

        for (let a = 1; a <= randomNumbersQuantity1; a++) {
            randomNumbers1.push(getNumber(numberStart, numberEnd));
        }
    
        for (let b = 1; b <= randomNumbersQuantity2; b++) {
            randomNumbers2.push(getNumber(1, overallNumbers));
        }
  
        if (getNumber(0, 1) == 0 ) {
            result.push(checkAndAddNumber(randomNumbers1, result));
        } else {
            result.push(checkAndAddNumber(randomNumbers2, result));
        }
    }
    document.getElementById("results").innerHTML = result.join(" ");
}