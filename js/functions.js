"use strict";

// added function for a hello message w/ var name = user info
name = prompt("what is your name?");
function sayHello(name) {
    return ("Hello " + name + "!");
};
var helloMessage = sayHello(name);
console.log(helloMessage);

// added my own name to var myName w/ hello message for myself
var myName = "Alex"
var myMessage = sayHello(myName);
console.log(myMessage);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

// var number from user and function created
var number = parseFloat(prompt("enter the number two to win!"));
function isTwo() {
    return (number === 2)
};
// test for proper behavior with var number
console.log(isTwo(number));
// test for proper behavior with var random
console.log(isTwo(random));


// tip calculator function taking input from user and returns tip amount
var bill = parseFloat(prompt("how much was your bill"));
var tip = parseFloat(prompt("enter tip percentage (example .15 = 15%"));
function calculateTip(bill, tip) {
    return (bill * tip);
};
// test for correct function behavior
console.log(calculateTip(bill, tip));


// added alert to function calculateTip and renamed so as to not interfere with the other
var bill2 = parseFloat(prompt("how much was your bill"));
var tip2 = parseFloat(prompt("enter tip percentage (example .15 = 15%"));
function calculateTip2(bill2, tip2) {
    return (bill2 * tip2);
    alert("You want to tip: $" + (bill2 * tip2));
};
// test for correct function behavior of calculateTip2
console.log(calculateTip2(bill2, tip2));
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
