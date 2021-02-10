(function () { "use strict"
// function to show number multiplied 1-10
  function showMultiplicationTable(number){
    for (let i = 1; i <= 10; i++)
      console.log(`${number} x ${i} = ${number * i}`);
  }

  function tenRandomNumber(min,max){
    for (let i = 0; i <= 10; i++)
      var randomNumber = ((Math.floor(Math.random() * (200-20) + 20)));
      if (randomNumber % 2 === 0){
        console.log(`${randomNumber} is even`);
      }
      else {
        console.log(`${randomNumber} is odd`);
      }
  } 
})();