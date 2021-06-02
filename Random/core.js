/* This chapter covers core modules.
Core modules come pre-delivered with Node.
The Node Package Manager (NPM) is used to obtain them. */

const path = require("path");
const v8 = require("v8");
const uploadsDirectory = path.join(__dirname, "www","files","uploads"); // Get the directory path for the sample folders

console.log(uploadsDirectory);
console.log(v8.getHeapStatistics());

