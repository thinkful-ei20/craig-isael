'use strict';

const testArr = [1, 2, 33, 444, 9];
function max(numbers) {
  let max = numbers[0];
  let i = 1;
  while (i < numbers.length) {
    if (numbers[i] > max) max = numbers[i];
    i++;
  }
  return max;
}
console.log(max(testArr));

function min(numbers) {
  let min = numbers[0];
  let i = 1;
  while (i < numbers.length) {
    if (numbers[i] < min) min = numbers[i];
    i++;
  }
  return min;
}
console.log(min(testArr));