const readline = require("readline"); // Readline Module

const rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); // Read line interface

rlInterface.question("What is your name? ", answer => {
    console.log(`Your answer: ${answer}`);
});