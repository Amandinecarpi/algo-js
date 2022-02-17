const readlineSync = require("readline-sync");
let min= readlineSync.question("give me a min number");
let max= readlineSync.question("give me a max number");
let number =readlineSync.question("give me a current number");
if (min>max){
    console.log("error detected")
}
if (number>min && number<max){
    console.log("the number is between min and max")
}
else {
    console.log("error")
}