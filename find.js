'use strict';
let array = [42, 5, 15];
function divisibleBy5(array){
    return array.find(e => e % 5 === 0);
}
console.log(divisibleBy5(array));
