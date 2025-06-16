// 1
// 0 1
// 0 1 0 
// 1 0 1 0 
// 1 0 1 0 1 

//This pattern is same like the  pattern 8 just only one thing is move the toggle to outside of the loop 

let n =5

//just initilazie this once
let toggle = 1

for(let i =0 ; i<n ; i++){
  let row = ""
 

  for(let j = 0 ; j<=i; j++){
    row = row + toggle;

    if(toggle == 1){
      toggle = 0
    }
    else{
      toggle = 1
    }
  }
  console.log(row);
}