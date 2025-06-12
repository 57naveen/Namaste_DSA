// Write  a function thet returns the number of negative cumbers in an array

function countNegatives(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count = count + 1;
    }
  }

  return count;
}

let arr = [2, -9, 5, -12, 4, -8, 2, 7, 2];

const output = countNegatives(arr);

console.log(output);
