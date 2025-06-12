// find the second largest number in an array

//CORNER CASE:
// Array is empty
// Array has negative value 
// Array  has duplicate value


function secondLargest(arr) {

  //if the array is less then 2 value then return 
  if(arr.length<2){
    return "Array Should have atleast 2 elements"
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {

      // update the firstlargest value to th secondLargest then update the firstLargest value
      secondLargest = firstLargest;
      firstLargest = arr[i];

    } 
    else if (arr[i] > secondLargest && arr[i] != firstLargest) {  // also checking the dupliacte array
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

let arr = [4, 9, 0, 2, 18, 7, 1];

let result = secondLargest(arr);

console.log(result);
