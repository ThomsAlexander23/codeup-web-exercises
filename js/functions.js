(function() {
    "use strict";

// added function for a hello message w/ var name = user info
    name = prompt("what is your name?");

    function sayHello(name) {
        return ("Hello " + name + "!");
    }

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
    var number = Number (prompt("Enter the number two to win!"));

    function isTwo(x) {
        return (number === 2)
    }

// test for proper behavior with var number
    console.log(isTwo(number));
// test for proper behavior with var random
    console.log(isTwo(random));


// tip calculator function taking input from user and returns tip amount
    var bill = Number (prompt("How much was your bill"));
    var tip = Number (prompt("Enter tip percentage (example .15 = 15%"));

    function calculateTip(bill, tip) {
        return (bill.toFixed(2) * tip.toFixed(2));
    }

// test for correct function behavior
    console.log(calculateTip(bill, tip));

// added alert to function calculateTip and renamed so as to not interfere with the other
    var bill2 = Number (prompt("How much was your bill"));
    var tip2 = Number (prompt("Enter tip percentage (example .15 = 15%"));

    function calculateTip2(bill2, tip2) {
        alert("You want to tip: $" + (bill2.toFixed(2) * tip2.toFixed(2)));
        return (bill2 * tip2);
    }

// test for correct function behavior of calculateTip2
    console.log(calculateTip2(bill2, tip2));


// user inputs price and discount var, created applyDiscount function
    var price = Number (prompt("What price is the object"));
    var discount = Number (prompt("Discount percentage (example: .15 = 15%"));

    function applyDiscount(price) {
        discount = 1 - discount;
        return (price.toFixed(2) - discount.toFixed(2));
    }


// test for applyDiscount function
    console.log(applyDiscount(price, discount));
})();