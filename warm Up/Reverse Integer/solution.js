function reverInteger(x) {
  let copy = x;

  x = Math.abs(x);

  let rev = 0;

  while (x > 0) {
    let last = x % 10;
    rev = 10 * rev + last;
    x = Math.floor(x / 10);
  }

  let limit = Math.pow(2, 31);

  if (rev < -limit || rev > limit) return 0; // this condition is asked in leetcode 

  if (copy < 0) {
    return -rev;
  } else {
    return rev;
  }
}

let x = -123534643;

const result = reverInteger(x);

console.log(result);
