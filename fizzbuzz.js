'use strict';

// function fizzBuzz(countTo) {
//   const results = [];
//   for (let i = 1; i <= countTo; i++) {
//     if (i % 15 === 0) {
//       results.push('fizzbuzz');
//     } else if (i % 5 === 0) {
//       results.push('buzz');
//     } else if (i % 3 === 0) {
//       results.push('fizz');
//     } else {
//       results.push(i);
//     }
//   }
//   return results;
// }

function fizzBuzz(countTo) {
  
  let arr = [];

  for (let i = 1; i <= countTo; i++) {
    let results = '';
    if (i % 3 === 0) {
      results += 'fizz';
    }
    if (i % 5 === 0) {
      results += 'buzz';
    }
    if (results === '') {
      results = i;
    }

    arr.push(results);
  }
  return arr;
}
console.log(fizzBuzz(100));