(function (){
  "use strict"

// fibonacci function generated first 50 fibonacci numbers to
// array logging the array to the console
  function fibonacciNumbers(){
    var fibonacciArray = [];
    for (let i = 0; i < 50; i++){
      if (i <= 2){
        fibonacci = {}
        fibonacci.iteration = i;
        fibonacci.value = i;
        fibonacciArray.push(fibonacci);
      } 
      else {
        fibonacci = {}
        fibonacci.iteration = i;
        fibonacci.value = ((Number(fibonacciArray[i-1].value)) + (Number(fibonacciArray[i-2].value)));
        fibonacciArray.push(fibonacci)
    }
  }
  console.log(fibonacciArray);
}
})