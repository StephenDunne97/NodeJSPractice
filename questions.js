process.stdout.write("Hello ");
process.stdout.write("World \n\n");
const questions = [
    "What is your middle name?",
    "What is the registration number of your car?",
    "What is your favourite colour?"
];

const ask = (i=0) => {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(" > ");
};

const answers = [];

ask();
// Listening for user input making the program asynchronous.
process.stdin.on("data", data => {
    answers.push (data.toString().trim());
    if (answers.length < questions.length)
    {
        ask(answers.length);
    }
    else
    {
        process.exit(); // Invokes an exit after the user's input is received.
    }
    });

    // Printing out user input and terminating.
    process.on("exit", () => {
        const [name,reg,colour] = answers;
        console.log(`
        Thank you for submitting your answers. We have recorded the following:
        Your middlename is ${name}. 
        You are driving a vehicle with registration number ${reg}. 
        Your favourite colour is ${colour}.
        `);
});