(function (){
  "use strict"

// fibonacci function generated first 50 fibonacci numbers to
// array logging the array to the console
  function fibonacciNumbers(){
    var fibonacciArray = [];
    for (let i = 0; i < 50; i++){
      if (i <= 2){
        fibonacciArray.push(i);
      } 
      else {
        fibonacciArray.push((fibonacciArray[i-1]) + (fibonacciArray[i-2]));
      }
    }
  console.log(fibonacciArray);
  }
})