// attributes and css things to cover:

//introductory vocab: getters && setters, method chaining
//.html() - GET the HTML contents or SET the HTML contents

//TODO: Let's get the HTML from the element with the ID of "best-seller-cont"
$('#best-seller-cont').html()

//TODO together: Let's set up a string with HTML to replace this old list with our updated best sellers - FEDORAS have moved into the number one spot!
var html = '';
html += '<h4 id="best-seller-header">Our Top Sellers</h4>' +
        '<ol><li className="hat-sold">Fedora hats</li>' +
        '<li className="hat-sold">Baseball hats</li>' +
        '<li className="hat-sold">Cowboy hats</li></ol>'
//TODO: Now, let's get back into that "best-seller-cont" and replace that HTML!
$('#best-seller-cont').html(html)
//TODO Together: Can we make a click event that changes "Howell's" to "Marco's" when we click on it? Help me out!
$('.navbar-brand').click(function(e){
    $(this).html("Marco's <i className=\"bi-shop mx-1\"></i>");
})
//.css() - get info about a property or change a property

//TODO: Let's see what the width of our "main-content" class is with .css()
console.log($('.main-content').css("width"));
//TODO Together: Can you help me? I'd like to set my modal's text to have a cool color :)
$('.modal').css("color", 'rebeccapurple')
//TODO: Let's make an object for us to use with .css(). .
var cssObject = {"background" : "cornflowerblue", "color" : "firebrick"}
//TODO Together: Nice - now, let's test this out by targeting our h1 with this warning background! Next, let's chain a font color after it
$('h1').css(cssObject).css("color", 'black')
//.addClass() ~ .removeClass() ~ .toggleClass()

//TODO: We've used a lot of bootstrap on the page - let's see what we can use .addClass to do in combination with bootstrap. Let's UPPERCASE that h1 with the shiny red background!
$('h1').addClass("text-uppercase")
//TODO Together: Can you assist me in removing the "bg-dark" background from our FOOTER?
$('footer').removeClass('bg-dark')
//TODO: I have a custom css class known as hi-lite - .toggleClass() with a .click() would be a neat way to use it
$("*").click(function(e){
    var ele = $(e.target);
    ele.toggleClass("hi-lite");
})

//Bonus activity:

// //TODO: Create a variable to store HTML - use jQuery to get the entire nav element's inner HTML. Console.log your variable to confirm the contents.
// var store = $('nav').html()
// console.log(store);
// //TODO: Remove the class of bg-dark and navbar-dark from the <nav> with jQuery.
// $('nav').removeClass('bg-dark', 'navbar-dark')
// //TODO: Add the class of navbar-light and bg-info from the <nav> with jQuery.
// $('nav').addClass(['bg-info', 'navbar-light'])
// //TODO: Finally, create the following - add your own button somewhere on the navbar. Add an event that will toggle the navbar between bg-dark/navbar-dark and bg-info/navbar-light respectively
// $('#colorschemeBtn').click(function (e){
//     // e.preventDefault();
//     $('nav').toggleClass(['bg-dark', 'navbar-dark'])
//
// })
// //TODO: Create your own object with multiple CSS properties you'd like to change. Change whatever element(s) you had in mind with your CSS object and .css()!
// var disappear = {"background-color":"white", "color" : "white"};
// $('*').css(disappear).css('color', 'red')

//traversing

//.each() - iterate over each matched element to do some stuff
//TODO: Let's change the last two lis of the class .hat-sold to "fedora hats" as well
$('.hat-sold').each(function(index){
    if (index !== 0){
        $('li').html("fedora Hats");
    }
})
//.first()
//TODO: Let's change the first list item in the class of .hat-sold from "Baseball hats" to "Porkpie hats"
$('.hat-sold').first().html('porkpie hat');
//.last()
//TODO Together: Let's change the last li in the class of .hat-sold to be Fancy hats - italicized! ! !
$('.hat-sold').last().html('fancy hats').css("font-style", "italic");
//.parent()
//TODO: Let's pop up the tree to the parent (<ol>) and use .css to change the list-style-type

//.children()
//TODO Together: What ID would I need to target to see all of the HTML, as children, that we've been manipulating so far?

//.next()
//TODO: Let's slide across branches (sibling to sibling) on our tree and change the HTML within the ordered list we find there to only show Top Hats! !

