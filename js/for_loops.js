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
     
  // exercise 4 half pyramid
  for (let i = 1; i < 10; i++)
    switch (i){
      case 1:
        console.log(i);
        break;
      case 2:
        console.log(i + "2");
        break;
      case 3:
        console.log(i + "33");
        break;
      case 4:
        console.log(i + "444");
        break;
      case 5:
        console.log(i + "5555");
        break;
      case 6:
        console.log(i + "66666");
        break;
      case 7:
        console.log(i + "777777");
        break;
      case 8:
        console.log(i + "8888888");
        break;
      case 9:
        console.log(i + "99999999");
        break;
    }

// Exercise 4: refactored!!
  var factor = "1";
  for (let i = 1; i < 10; i++)
    if (i < 10){
    var multiplier = Number(factor);
    console.log(i * multiplier);
    factor = (factor + "1");
    }


})();