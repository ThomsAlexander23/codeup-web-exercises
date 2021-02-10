(function () { "use strict"
// function to show number multiplied 1-10
  function showMultiplicationTable(number){
    for (let i = 1; i <= 10; i++)
      console.log(`${number} x ${i} = ${number * i}`);
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