(function (){
  "use strict"
//start at one
// print first 50 fibonacci numbers
  function fibonacciNumbers(){
    var fibonacciArray = [];
    for (let i = 0; i < 50; i++)
      if (i === 0){
        fibonacci = {}
        fibonacci.iteration = i;
        fibonacci.value = i;
        fibonacciArray.push(fibonacci);
      }
      else if (i === 1 || i === 2){
        fibonacci = {}
        fibonacci.iteration = i;
        fibonacci.value = i;
        fibonacciArray.push(fibonacci);
      }
      else {
        fibonacci = {}
        fibonacci.iteration = i;
        fibonacci.value = ((Number(fibonacciArray[i-1].value)) + (Number(fibonacciArray[i-2].value)));
        fibonacciArray.push(fibonacci);
      }
    console.log(fibonacciArray);
  }
})