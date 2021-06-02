// Demonstrate interaction with the global object 
const path = require("path"); // path variable requires the path module

console.log(`Filename: ${path.basename(__filename)}`);
console.log(__dirname);
console.log(__filename);