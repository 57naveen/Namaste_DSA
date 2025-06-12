// Write a function that returns the largest number in an array

// let arr = [5, 0, 7, 10, 8, 17, 1];
let arr = [-9,-19,-3];

function largestNumber(arr) {
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

const result = largestNumber(arr);

console.log(result);
