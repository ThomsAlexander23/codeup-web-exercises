(function(){
  "use strict"

  // exercise for break and continue
  var numToSkip = Number(prompt("eneter a number between 1-50"));
  for (let i = 0; i <= 50; i++){
    if ((numToSkip > 50) || ((numToSkip % 2)===0)){
      break
    }
    else {
      console.log(`The number to skip: ${numToSkip}`);
      if ((i % 2) === 0){
        continue;
      }
      else {
        if (i === numToSkip){
          console.log(`Yikes! Skipping number: ${numToSkip}`);
        }
        else{
          console.log(`Here is an odd number: ${i}`);
        }
      }
    }
  } 
})