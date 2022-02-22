const readline = require('readline-sync');

let tab = [1, 2, 3, 4, 5];
let result = 0;

    for(let i = 0; i <= tab.length; i++){
        result = result + i
}
console.log(result);



let tab2 = [100, 101, 102];
let res = 0;

    for(const n of tab2){
    res += n;
}

console.log(res)