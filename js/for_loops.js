(function () { "use strict"
// function to show number multiplied 1-10
  function showMultiplicationTable(number){
    for (let i = 1; i <= 10; i++)
      console.log(`${number} x ${i} = ${number * i}`);
  }

// exercise 3: for loop odd/even of random numbers
  for (let i = 0; i < 10; i++)
    if (i < 10){
      var x = (Math.floor(Math.random()* 180) + 20);
      if ((x % 2) === 0){
        console.log(`${x} is even`);
      }
      else{
        console.log(`${x} is odd`);
      }
    }


// recursive function for this loop exercise
  // function randomNumber(depth){
  //   if (depth >= 0) {
  //     var number = (((Math.floor(Math.random() * (200-20) + 20))));
  //     if (((number) % 2) === 0){
  //       console.log(`${number} is even`);
  //     }
  //     else {
  //       console.log(`${number} is odd`);
  //     }
  //     randomNumber(depth -1);
  //   }
  // } 



})();