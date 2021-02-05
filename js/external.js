"use strict";

// Ensuring user knows they are here!
alert("Welcome to my Website!");

// does user favorite color match mine!
var favorite_color = prompt("What is the best color in the whole wide world?");
  if (favorite_color === "blue") {
    alert(favorite_color + " is the correct answer and is the best color in the whole wide world!!")
  }
  else {
    alert(favorite_color + " this is just plain wrong")
  };

//exercise 3.1: movie rental
var lil_mermaid = Number (prompt("How many nights did you rent The Little Mermaid?"));
var bro_bear = Number (prompt("How many nights did you rent Brother Bear?"));
var hercules = Number (prompt("How many nights did you rent Hercules"));
var price = Number (prompt("What was the rental rate?"));

var money_for_rental = alert("You owe $" + (price * (lil_mermaid + bro_bear + hercules)));

//exercise 3.2: pay period!
// gather pay info
var facebook = Number (prompt("How many hours did you work at Facebook?"));
var facebookPay = Number (prompt("What is your pay rate at Facebook"));
var google = Number (prompt("How many hours did you work at Google?"));
var googlePay = Number (prompt("What is your pay rate at Google"));
var amazon = Number (prompt("How many hours did you work at Amazon?"));
var amazonPay = Number (prompt("What is your pay rate at Amazon"));
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
var student_sched = prompt("How many credits do you have?");
// credit cutoff & random full or not boolean
var class_space = Math.random();
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
var member = confirm("Are you a member?, OK for yes!");
var cart = Number (prompt("How many items do you have in your cart?"));
var original_price = Number (prompt( "What do is the cost of your item individually?"));
var discount = .66;
var offerValid = Math.random() < .5
// calculations
var price_total = original_price * cart;
var discount_price = price_total * discount;
var savings = price_total - discount_price;
// display alerts
if ((member === true) || (cart > 2)) {
  if (offerValid == true) {
    alert("$" + price_total + " is your total before discount");
    alert("This is your discounted price: $" + discount_price);
    alert("You saved: $" + savings );}
  else {
    alert("Offer is not valid, your total remains $" + price_total)
  }  
}
else {
  alert("Your total is: $" + price_total);
  alert("Become a member today and save: $" + savings);
};

console.log("Hello, from external Javascript");
