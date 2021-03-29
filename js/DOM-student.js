//i. locating in the DOM

// first todo:
var idDispaly = document.getElementById("hat-search");
console.log(idDispaly);
// TODO: Find an element by the id of "hat-search". Store the result into a variable. Use a console log to check what is in your variable.

// second todo:
var flexContainers = document.getElementsByClassName("d-flex");
console.log(flexContainers);
// TODO: Find all of our elements we made flex containers in Bootstrap! Locate the .d-flex class, store all of your results into a variable, and then console.log them.

//third todo:
for (var i = 0; i < flexContainers.length; i++) {
    console.log(flexContainers[i]);
}

// TODO: Finish my FOR loop to go through that variable containing our d-flex'ed items and console.log each individual one within the loop!

//fourth todo:
var divElements = document.getElementsByTagName('div');
console.log(divElements);

// TODO: Find all of our div elements and store them into a variable~! Console.log the variable to see the results within!

var numDivElements = divElements.length;
console.log(numDivElements);
// TODO: Now that we have a variable with all of the elements, can you tell me how many divs are in the HTML using that variable and a little Javascript? Hint: the variable looks and behaves a lot like an array, doesn't it? That helped us in our for loop's condition!

// bonus todo 1:
function locateDivs() {
    return (document.getElementsByTagName('div'))
}

console.log(locateDivs());

// TODO BONUS (a): Write a function called locateDivs. When locateDivs is called, it should return a collection of the div elements found.

// bonus todo 2:
function locateElements(x) {
    if (document.getElementsByTagName(x) === true) {
        return (document.getElementsByTagName(x));
    }
    return false;

}

// TODO BONUS (b): Write a function called locateElements. locateElements should take in one parameter, the element to be searched for, and then return a collection of those elements. If no elements by that name were found, return false.

// ii. a step further: accessing / looking into what we've located deeper

// innerHTML/innerText
var changeName = document.getElementsByTagName('a');
changeName[0].innerHTML = 'Thoms<i class="bi-shop mx-1"></i>'
// TODO: Howell's doesn't sound like the name you'd give your hat shop - let's change the innerText of that in our navigation bar to your own name.

var orderedList = document.getElementsByTagName('ol');
console.log(orderedList);
orderedList[0].innerHTML = '<li class="hat-sold">Amish Cornhusks</li><li class="hat-sold">Barbershop Quartet</li><li class="hat-sold">Beaver Bills</li>';
// TODO: There's only one ordered list on the page - can you get into that ordered list and use innerHTML to change the list items within that ordered list to what you think the top sellers were?

var discountsComing = document.getElementsByClassName('special-offer');
console.log(discountsComing);
for (var i = 0; i < discountsComing.length; i++) {
    discountsComing[i].innerHTML = 'New Discounts are coming soon'
}
// TODO (BONUS): I have two "special-offer" classes used in my table - grab those classes by name, store them into a variable, and then use a loop to replace the innerHTML. The new table data should have strings that let our customers know that "New discounts are coming soon!"

// attributes

var demoIDDelete = document.getElementById("navbarTogglerDemo02");
demoIDDelete.removeAttribute('id')
console.log(demoIDDelete);
// TODO: Bringing in Bootstrap components, sometimes we can forget to change example or demo related text - one of my ids in the HTML is set to "navbarTogglerDemo02". I don't think we need that ID at all, can you remove that attribute for me? Start by storing it in a variable!

var addID = document.getElementsByClassName('navbar-toggler');
addID[0].setAttribute('id', 'navbar-collapser')
console.log(addID);
// TODO: Uh oh - actually there was a BUTTON that referred to 'navbarTogglerDemo02' that is right above it in our HTML structure! Let's add an ID back to the variable you used above that makes more sense (perhaps "navbar-collapser"?)
addID[0].setAttribute('data-target', 'navbar-collapser');
addID[0].setAttribute('aria-controls', 'navbar-collapser');


// TODO: Now, get into that button element that makes reference to our old "navbarTogglerDemo02" ids and change those attributes to match. Refactor complete!

// style
var colorChange = [];
colorChange.unshift(document.getElementById('top-header'), document.getElementsByClassName('main-content'), document.getElementsByTagName("body"))
console.log(colorChange);
for (var i = 0; i < colorChange.length; i++) {
        for (var j = 0; j < colorChange[i].length; j++) {
            colorChange[i][j].style.color = 'rebeccapurple'
        }
}
console.log(colorChange);
// TODO: I've embedded a style sheet that adjusts color for the body, a class called "main-content", and an ID of "top-header". Target the three of these elements and set your own colors as you'd like to each of the three I've mentioned.
var preConnect = document.createElement('link');
preConnect.rel = 'preconnect';
preConnect.href = 'https://fonts.gstatic.com';
document.head.appendChild(preConnect);
var fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap';
document.head.appendChild(fontLink);

console.log(colorChange);
for (var i = 0; i < colorChange.length; i++) {
    for (var j = 0; j < colorChange[i].length; j++) {
        colorChange[i][j].style.fontFamily = 'new temogin, serif';
    }
}
var topHeader = document.getElementById('top-header');
topHeader.style.fontFamily = 'new temogin, serif';
topHeader.style.color = 'rebeccapurple'
// TODO (BONUS): That default bootstrap font is nice, but we've been adding our own fonts to things for a couple of weeks now! Add a font-family of some kind that you'd like it to adjust to.