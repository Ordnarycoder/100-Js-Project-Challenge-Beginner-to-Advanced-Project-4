const readline = require('readline');

function letter_counter() {
    let letter = [];  
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Please enter a word: ", (word) => {
        for (let i = 0; i < word.length; i++) {
            letter.push(word[i]);  
        }
        console.log("Number of letters:", letter.length);  
        rl.close();
    });
}

letter_counter();
