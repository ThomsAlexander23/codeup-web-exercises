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

//exercise 3.1: movie rental
var lil_mermaid = prompt("how many nights did you rent The Little Mermaid?");
var bro_bear = prompt("how many nights did you rent Brother Bear?");
var hercules = prompt("how many nights did you rent Hercules");
var price = prompt("what was the rental rate?");

var money_for_rental = alert("You owe $" + (price * (lil_mermaid + bro_bear + hercules)));

//exercise 3.2: pay period!
// gather pay info
var facebook = prompt("how many hours did you work at Facebook?");
var facebookPay = prompt("what is your pay rate at Facebook");
var google = prompt("how many hours did you work at Google?");
var googlePay = prompt("what is your pay rate at Google");
var amazon = prompt("how many hours did you work at Amazon?");
var amazonPay = prompt("what is your pay rate at Amazon");
// each company total pay
var fb_chk = facebook * facebookPay;
var goog_chk = google * googlePay;
var amz_chk = amazon * amazonPay;
// total check & total hours
var total = fb_chk + goog_chk + amz_chk;
var total_hours = facebook + google + amazon;
// display to user
var total_pay = alert ("You worked " + total_hours + " and got paid $" + total);


//exercise 3.3: Course Schedule
// student input
var student_sched = prompt("how many credits do you have?");
// credit cutoff & random full or not boolean
var class_space = Math.random() < .5;
var cut_off = 14;
// enter class or not based on input with confirm
var confirm = 0
if ((student_sched <= cut_off) && class_space === true){
  confirm = confirm("Space available, would you like to join the class?");
  alert ("you have successfully been added, Good Luck!");
}
else {
  alert("sorry either a schedule conflict or full class exists! Contact your advisor.")
};
console.log("Hello, from external Javascript");
