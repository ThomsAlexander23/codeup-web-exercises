(function () {
    "use strict";
/*
    /* ##########################################################################
//defined function analyzeColor() to take myColor against an array that will be looped
// through and return a statement about it
    function analyzeColor() {
        let myColor = prompt("pick a color of the rainbow");
        let colorItems = ["Cherries are red", "Oranges are orange", "Sunflowers are yellow", "Cannabis is green", "The Mediterranean is blue", "I do not know anything by this color", "I do not know anything by this color"];
        let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        for (let i = 0; i < colors.length; i++) {
            if (myColor === colors[i]) {
                var colorComment = colorItems[i];
                break;
            } else {
                colorComment = (colorItems[6]);
            }
        }
        alert(colorComment);
        return (colorComment);
    }

// test for function behavior of analyzeColor
    console.log(analyzeColor());


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)


    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

// function analyzeColor adjusted to accept randomColor variable
    function analyzeColor_random() {
        let myColor = randomColor;
        let colorItems = ["Cherries are red", "Oranges are orange", "Sunflowers are yellow", "Cannabis is green", "The Mediterranean is blue", "I do not know anything by this color", "I do not know anything by this color"];
        let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        for (let i = 0; i < colors.length; i++) {
            if (myColor === colors[i]) {
                var colorComment = colorItems[i];
                break;
            } else {
                colorComment = (colorItems[6]);
            }

        }
        return (colorComment);
    }

// test for function behavior of analyzeColor with a random color
    console.log(analyzeColor_random());

// switch function for colorAnalyzer_random passing randomColor
    function switch_colorAnalyzer_random(randomColor) {
        switch (randomColor) {
            case "red":
                alert("Cherries are red");
                break;
            case "orange":
                alert("Oranges are orange");
                break;
            case "yellow":
                alert("Sunflowers are yellow");
                break;
            case "green":
                alert("Cannabis is green");
                break;
            case "blue":
                alert("The Mediterranean is blue");
                break;
            default:
                alert("I do not know anything of this color");
                break;
        }
    }

// testing for correct switch behavior
    console.log(switch_colorAnalyzer_random(randomColor));

**/
    var random_luckyNumber = ((Math.random() * 5)+1);
    var random_total = ((Math.random() * 1000) + 1);
    function calculateTotal(luckyNumber = 0, total =  0) {
        switch (luckyNumber) {
            case 1:
                let tenPercent = (total *(1- .1));
                alert(tenPercent.toFixed(2));
                break;
            case 2:
                let quarterPercent = (total * (1-.25));
                alert(quarterPercent.toFixed(2));
                break;
            case 3:
                let thirtyfivePercent = (total * (1-.35));
                alert(thirtyfivePercent.toFixed(2));
                break;
            case 4:
                let fiftyPercent = (total * (1-.5));
                alert(fiftyPercent.toFixed(2));
                break;
            case 5:
                let freePercent = (total * (1-1));
                alert(freePercent.toFixed(2));
                break;
            default:
                let noLuck = (total);
                alert(noLuck.toFixed(2));
                break;
        }
    }
    console.log(calculateTotal(random_luckyNumber, random_total));


    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */
})();