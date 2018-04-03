'use strict';
let numbers = [1,2,3,4];
function average(numbers) {
    let result = 0;
    numbers.forEach(e => result += e);
    return result/numbers.length;    
}
console.log(average(numbers));