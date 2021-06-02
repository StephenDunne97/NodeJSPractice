// Demonstrate the process object
console.log("PID: " + process.pid);
console.log("Node version: " + process.versions.node);

const [,,firstname,lastname] = process.argv;
console.log("Argv output: " + process.argv); // Returns an array of all the commands executed for the execution of this JS file.
console.log(`Your name is ${firstname} ${lastname}`);