(function (){
  "use strict"

  // FizzBuzz Exercise: 
  // 0-100 if divisible 3 log Fizz
  // 0-100 if divisible 5 log Buzz
  //0-100 if divisible 3 & 5 (15) log FizzBuzz
  for (let i = 0; i <= 100;i++){
    if (i % 15 === 0){
      console.log("FizzBuzz");
      
    }
    else if((i % 5) === 0){
      console.log("Buzz");
    }
    else if ((i % 3) === 0){
      console.log("Fizz");
    }
  }



})