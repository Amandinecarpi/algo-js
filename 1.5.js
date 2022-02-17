const readlineSync = require("readline-sync");
let number1 = readlineSync.question(" Give me a number");
let number2 =readlineSync.question(" Give me a second number");
console.log(Math.trunc(number1) * number2 ); 