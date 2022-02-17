const readlineSync = require("readline-sync");
let num = readlineSync.question("give me your favorite number");
num= parseInt(num)
while(num != 42){
    console.log("Are you sure ? ");
    num = readlineSync.question("What is your favorite number ? ");
}
