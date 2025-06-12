// write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

// result
// searchElement(arr,4) => 0
// searchElement(arr,2) => 1
// searchElement(arr,60) => -1


let arr = [4, 2, 7, 26, 50];

function searchElemet(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}

console.log(searchElemet(arr, 54));
