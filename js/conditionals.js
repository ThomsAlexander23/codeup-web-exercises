(function () {
    "use strict";

//     /* ##########################################################################*/
//defined function analyzeColor() to take myColor against an array that will be looped
// through and return a statement about it
    function analyzeColor(x) {
        let colorItems = ["Cherries are red", "Oranges are orange", "Sunflowers are yellow", "Cannabis is green", "The Mediterranean is blue", "I do not know anything by this color", "I do not know anything by this color"];
        let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        for (let i = 0; i < colors.length; i++) {
            if (x === colors[i]) {
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
        analyzeColor(randomColor);
    }
// test for function behavior of analyzeColor with a random color
    console.log(analyzeColor_random());


// switch function for colorAnalyzer_random passing randomColor
    function switch_colorAnalyzer_random(randomColor) {
        switch (randomColor) {
            case "red":
                alert(`Cherries are ${randomColor}`);
                break;
            case "orange":
                alert(`Oranges are ${randomColor}`);
                break;
            case "yellow":
                alert(`Sunflowers are ${randomColor}`);
                break;
            case "green":
                alert(`Cannabis is ${randomColor}`);
                break;
            case "blue":
                alert(`The Mediterranean is ${randomColor}`);
                break;
            default:
                alert(`I do not know anything of this color ${randomColor}`);
                break;
        }
    }
    // testing for correct switch behavior
    console.log(switch_colorAnalyzer_random(randomColor));


// Exercise CalculateTotal: function passes two parameters to receive a lottery discount on purchase
    var luckyDiscount = [0, .1, .25, .35, .5, 1];
    var total_bill = Number (prompt("Enter bill here"));
    function calculateTotal(luckyNumber = (Math.floor(Math.random() * 6)), total =  (Math.floor(Math.random() * 1001))) {
        //when total_bill is not a valid bill amount; a random bill amount is generated
        if (total_bill <= 0){
            alert(total *(1 - luckyDiscount[luckyNumber]))
        }
        // when total_bill is valid amount function runs with total_bill as total value
        else {
            total = total_bill;
            alert(total *(1-luckyDiscount[luckyNumber]))
        }
    }

 // testing calculateTotal function with two random generated numbers
    console.log(calculateTotal());


// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

//function that asks for user permission; then gives two possible scenarios; one involves number outputs the other apologizes
    function threePrompts(){
        var numConfirm = confirm("Would you like to enter a number, to see three results?");
        if (numConfirm === true) {
            var userNum = Number (prompt("Enter a number"));
            var evenOdd = ((userNum % 2) === 1) ? "Odd" : "Even";
            var posNeg = (userNum <= 0) ? "Negative" : "Positive";
            var plus100 = (userNum + 100);
            alert(evenOdd);
            alert(plus100);
            alert(posNeg);
        }
        else {
            alert("Sorry, we wasted your time.")
        }
    }
// test for function behavior
    console.log(threePrompts());

})();