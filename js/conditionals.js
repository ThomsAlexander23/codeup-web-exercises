(function () {
    "use strict";

    /* ##########################################################################*/
//defined function analyzeColor() to take myColor against an array that will be looped
// through and return a statement about it
/*
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
*/
// Exercise CalculateTotal: function passes two parameters to receive a lottery discount on purchase
    var total_bill = parseFloat(prompt("enter bill here"));
    function calculateTotal(luckyNumber = ((Math.floor(Math.random() * 5)+1)), total =  ((Math.floor(Math.random() * 1000) + 1))) {
        //when total_bill is not a valid bill amount; a random bill amount is generated
        if (total_bill <= 0){
            switch (luckyNumber) {
                case 1:
                    let tenPercent = (total *(1- .1));
                    alert("Lucky number " + luckyNumber + " and a total of $" + total + " results in a new total of $" + tenPercent.toFixed(2));
                    break;
                case 2:
                    let quarterPercent = (total * (1-.25));
                    alert("Lucky number " + luckyNumber + " and a total of $" + total + " results in a new total of $" + quarterPercent.toFixed(2));
                    break;
                case 3:
                    let thirtyfivePercent = (total * (1-.35));
                    alert("Lucky number " + luckyNumber + " and a total of $" + total + " results in a new total of $" + thirtyfivePercent.toFixed(2));
                    break;
                case 4:
                    let fiftyPercent = (total * (1-.5));
                    alert("Lucky number " + luckyNumber + " and a total of $" + total + " results in a new total of $" + fiftyPercent.toFixed(2));
                    break;
                case 5:
                    let freePercent = (total * (1-1));
                    alert("Lucky number " + luckyNumber + " and a total of $" + total + " results in a new total of $" + freePercent.toFixed(2));
                    break;
                default:
                    let noLuck = (total);
                    alert("Lucky number " + luckyNumber + " and a total of $" + total + " results in a new total of $" + noLuck.toFixed(2));
                    break;
            }
        }
        // when total_bill is valid amount function runs with total_bill as total value
        else {
            total = total_bill;
            switch (luckyNumber) {
                case 1:
                    let tenPercent = (total *(1- .1));
                    alert("Lucky number " + luckyNumber + " and a total of $" + total + " results in a new total of $" + tenPercent.toFixed(2));
                    break;
                case 2:
                    let quarterPercent = (total * (1-.25));
                    alert("Lucky number " + luckyNumber + " and a total of $" + total + " results in a new total of $" + quarterPercent.toFixed(2));
                    break;
                case 3:
                    let thirtyfivePercent = (total * (1-.35));
                    alert("Lucky number " + luckyNumber + " and a total of $" + total + " results in a new total of $" + thirtyfivePercent.toFixed(2));
                    break;
                case 4:
                    let fiftyPercent = (total * (1-.5));
                    alert("Lucky number " + luckyNumber + " and a total of $" + total + " results in a new total of $" + fiftyPercent.toFixed(2));
                    break;
                case 5:
                    let freePercent = (total * (1-1));
                    alert("Lucky number " + luckyNumber + " and a total of $" + total + " results in a new total of $" + freePercent.toFixed(2));
                    break;
                default:
                    let noLuck = (total);
                    alert("Lucky number " + luckyNumber + " and a total of $" + total + " results in a new total of $" + noLuck.toFixed(2));
                    break;
            }
        }

    }

 // testing calculateTotal function with two random generated numbers
    console.log(calculateTotal());


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