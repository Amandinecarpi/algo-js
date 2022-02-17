const readlineSync = require("readline-sync");
let age = readlineSync.question('Can you give me your age? ');
if (age >= 18){
console.log("you are an adult");
}
else {
    console.log ("you're not an adult")
}