"use strict";

// Ensuring user knows they are here!
alert("Welcome to my Website!");

// does user favorite color match mine!
var favorite_color = prompt("what is the best color in the whole wide world?");
  if (favorite_color === "blue") {
    alert(favorite_color + " is the correct answer and is the best color in the whole wide world!!")
  }
  else {
    alert(favorite_color + " this is just plain wrong")
  };

//exercise 3.1: movie rental
var lil_mermaid = parseInt(prompt("how many nights did you rent The Little Mermaid?"));
var bro_bear = parseInt(prompt("how many nights did you rent Brother Bear?"));
var hercules = parseInt(prompt("how many nights did you rent Hercules"));
var price = parseInt(prompt("what was the rental rate?"));

var money_for_rental = alert("You owe $" + (price * (lil_mermaid + bro_bear + hercules)));

//exercise 3.2: pay period!
// gather pay info
var facebook = parseInt(prompt("how many hours did you work at Facebook?"));
var facebookPay = parseInt(prompt("what is your pay rate at Facebook"));
var google = parseInt(prompt("how many hours did you work at Google?"));
var googlePay = parseInt(prompt("what is your pay rate at Google"));
var amazon = parseInt(prompt("how many hours did you work at Amazon?"));
var amazonPay = parseInt(prompt("what is your pay rate at Amazon"));
// each company total pay
var fb_chk = facebook * facebookPay;
var goog_chk = google * googlePay;
var amz_chk = amazon * amazonPay;
// total check & total hours
var total_money = fb_chk + goog_chk + amz_chk;
var total_hours = facebook + google + amazon;
// display to user
var total_pay = alert ("You worked " + total_hours + " and got paid $" + total_money);


//exercise 3.3: Course Schedule
// student input
var student_sched = prompt("how many credits do you have?");
// credit cutoff & random full or not boolean
var class_space = .1;
var cut_off = 14;
// enter class or not based on input with confirm
var confirmation = ""
if ((student_sched <= cut_off) && (class_space <= .5 )){
   confirmation = confirm("Space available, would you like to join the class? OK for yes!");
   if (confirmation == true) {
     alert("You have been added, Good Luck!");
   }
   else {
     alert ("You have chosen to not add the class!");
   }
}
else {
  alert("sorry either a schedule conflict or full class exists! Contact your advisor.")
};


//exercise 3.4: Product Offer
// user input and
var member = confirm("are you a member?, OK for yes!");
var cart = parseInt(prompt("how many items do you have in your cart?"));
var original_price = parseInt(prompt( "what do is the cost of your item individually?"));
var discount = .66;
// calculations
var price_total = original_price * cart;
var discount_price = price_total * discount;
var savings = price_total - discount_price;
// display alerts
if ((member === true) || (cart > 2)) {
  alert("$" + price_total + " is your total before discount");
  alert("This is your discounted price: $" + discount_price);
  alert("You saved: $" + savings );
}
else {
  alert("Your total is: $" + price_total);
  alert("Become a member today and save: $" + savings);
};

console.log("Hello, from external Javascript");
