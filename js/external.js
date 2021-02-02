"use strict";
// Ensuring user knows they are here!
alert("Welcome to my Website!");

// does user favorite color match mine!
var favorite_color = prompt("what is the best color in the whole wide world?");
  if (favorit_color === "blue") {
    alert(favorite_color + " is the correct answer and is the best color in the whole wide world!!")
  }
  else {
    alert(favorite_color + "this is just plain wrong")
  };

//exercise 3.1
var lil_mermaid = prompt("how many nights did you rent The Little Mermaid?");
var bro_bear = prompt("how many nights did you rent Brother Bear?");
var hercules = prompt("how many nights did you rent Hercules");
var price = prompt("what was the rental rate?");

return alert("You owe $" + (price * (lil_mermaid + bro_bear + hercules)));



console.log("Hello, from external Javascript");
