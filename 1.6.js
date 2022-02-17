const readlineSync = require("readline-sync");
let number1 = readlineSync.question(" Give me a number whole");
let number2 =readlineSync.question(" Give me a second number whole");
console.log(number1 % number2);