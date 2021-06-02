/* Using the readline module to recreate the questions.js file. */
const readline = require("readline");
const questions = [
    "What is your name? ",
    "What is your favourite colour? ",
    "What's 9 + 10? "
];

const rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); // Read line interface

const collectAnswers = (questions, done) => {
    const answers = [];
    const[firstQuestion] = questions;
    
    const questionAnswered = answer => {
        answers.push(answer);
        if(answers.length < questions.length){
            rlInterface.question(questions[answers.length], questionAnswered);
        }
        else{
            done(answers);
        }
    };
    rlInterface.question(firstQuestion, questionAnswered);
};

collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});