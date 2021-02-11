(function (){
  "use strict"

// Exercise: multiply i by 2 until 65536 is reached
var i = 2
  while (i < 65536){
    console.log(i);
    i = i * 2;
  }

  // Exercise: Selling ice cream cones until i have none left or not enough to sell!!
  var allCones = (Math.floor(Math.random() * 50) + 50);
  do {
    var conesSold = (Math.floor(Math.random() * 5) +1);
      if ((allCones-conesSold)> 0) {
        console.log(`${conesSold} cones sold!`);
        allCones = (allCones - conesSold);
      }
      else if ((allCones) === 0) {
        console.log("I sold all my cones today.....YEAH BABY!")
      }
      else {
        console.log(`You want ${conesSold} cones, but i only have ${allCones} cones left`);
      }
  } while (allCones > conesSold);

})