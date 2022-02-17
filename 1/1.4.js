const readlineSync = require("readline-sync");
let firstname = readlineSync.question('what is your firstname ? ');
let name = readlineSync.question('what is your name ? ');
let city = readlineSync.question('where do you live ? ');
console.log("your firstname is " + firstname + " " + " and your name is " + name + " " + "and you live in " + city)