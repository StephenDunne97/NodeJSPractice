const waitTime = 3000; // Milliseconds
const waitInterval = 500; // Half a second
let currentTime = 0; // Not a const as it will change

const incTime = () => {
    currentTime += waitInterval;
    console.log(`Waiting ${currentTime/1000} seconds`);
};

console.log(`Delay set for: ${waitTime/1000} seconds`);
const timerFinished = () => {
    clearInterval(interval);
    console.log("Time up!");
};

const interval = setInterval(incTime, waitInterval); // Calls the incTime function every .5 seconds.
setTimeout(timerFinished, waitTime);