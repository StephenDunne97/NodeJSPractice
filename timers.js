const waitTime = 5000; // Milliseconds
const waitInterval = 500; // Half a second
let currentTime = 0; // Not a const as it will change

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime) * 100);
    // console.log(`Waiting ${currentTime/1000} seconds`);
    process.stdout.clearLine(); // Clears std out
    process.stdout.cursorTo(0); // Moves cursor back to 0
    process.stdout.write(`Waiting... ${p}%`); // Logs the time as a percentage
};

console.log(`Delay set for: ${waitTime/1000} seconds`);
const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine(); // Clears std out
    process.stdout.cursorTo(0); // Moves cursor back to 0
    process.stdout.write(`Time up!`); // Logs the time as a percentage
};

const interval = setInterval(incTime, waitInterval); // Calls the incTime function every .5 seconds.
setTimeout(timerFinished, waitTime); // Calls timerFinished when the waitTime is hit.