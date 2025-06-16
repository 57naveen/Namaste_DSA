// Write a function that returns the count of digit in a number

function countDigit (n){
  
  //corner case handel for value 0 
  if(n==0) return 1

// converting negative numbers to positive number
  n = Math.abs(n);

  let count = 0

  while(n>0){
    n = Math.floor(n/10)
    count ++;
  }

  return count

}

num = 43765
const result = countDigit(num)

console.log(result);