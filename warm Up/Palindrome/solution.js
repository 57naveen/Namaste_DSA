// last digit = n % 10
// remove last = n/10

num = 121;

function palindrom(n) {
  if (n < 0) return false; // negative value will not an palindrom so always return false

  let rev = 0;
  let copy = n; // make a copy of the value to compare

  while (n > 0) {
    let rem = n % 10; // get the last digit

    rev = 10 * rev + rem;

    n = Math.floor(n / 10); // remove the last digit and round  the value
  }

  if (rev === copy) {
    return true;
  } else return false;
}

const result = palindrom(num);

console.log(result);
