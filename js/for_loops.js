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


// Exercise 3: recursive function implemented
  function randomNumber(depth){
    if (depth >= 0) {
      var number = (((Math.floor(Math.random() * (200-20) + 20))));
      if (((number) % 2) === 0){
        console.log(`${number} is even`);
      }
      else {
        console.log(`${number} is odd`);
      }
      randomNumber(depth -1);
    }
  } 

// Exercise 4: refactored!!
  var factor = "1";
  for (let i = 1; i < 10; i++){
    var multiplier = Number(factor);
    console.log(i * multiplier);
    factor = (factor + "1");
    }
//  Exercise 4: nested  
  for (let i = 1; i < 10; i++){
    var num =" ";
    for (let x = 1; x <= i; x++){
        num += i.toString()
    }
    console.log(num);
  }

// exercise 5: for loop 100 to 5 decrementing by 5
  for (let i = 100; i >= 5; i = i-5)
    console.log(i);

})();