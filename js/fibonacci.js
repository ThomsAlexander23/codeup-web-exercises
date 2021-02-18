(function () {
  "use strict";

  // fibonacci function generated first 50 fibonacci numbers to
  // array logging the array to the console
  function fibonacciNumbers(
    depth = prompt("How many fibonacci numbers do you want?")
  ) {
    while (typeof depth !== "number" && isNaN(depth)) {
      fibonacciNumbers(prompt("A number must be entered!"));
    }
    var fibonacciArray = [];
    for (let i = 0; i < depth; i++) {
      if (i <= 1) {
        fibonacciArray.push(i);
        console.log(fibonacciArray[i]);
      } else {
        fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
        console.log(fibonacciArray[i]);
      }
    }
  }
});
