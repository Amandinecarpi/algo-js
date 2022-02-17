const readlineSync = require("readline-sync");
let num = readlineSync.question("give me a number between 1 and 7");
if (num == 1){
    console.log("lundi")
}
if (num == 2){
    console.log("mardi")
}
if (num == 3){
    console.log("mercredi")
}
if (num == 4){
    console.log("jeudi")
}
if (num == 5){
    console.log("vendredi")
}
if (num == 6){
    console.log("samedi")
}
if (num == 7){
    console.log("dimanche")
}