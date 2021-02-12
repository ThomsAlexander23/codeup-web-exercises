(function() {
    "use strict";

    // new object person with 2 properties, firstName & lastName
    // logged object to console using .notation
    var person = {};
    person.firstName = 'Alexander';
    person.lastName = 'Thoms';
    console.log(person.firstName);
    console.log(person.lastName);

    // method added to person that displays a message saying hello from the properties first and last
    // logged the new method for functionality
    person.sayHello = function sayHello(){
        console.log(`Hello from ${person.firstName} ${person.lastName}`);
    }
    console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    // discount function created to display discount messages logged to the console for customers
    // called discount in a forEach of array shoppers to display each customers information
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    function discount(shoppers){
        if (shoppers.amount >= 200){
            var discountedPrice = (shoppers.amount * .88);
            console.log(`${shoppers.name}: $${shoppers.amount}; discounted by 12% to $${discountedPrice}`);
        }
        else {
            console.log(`${shoppers.name}: $${shoppers.amount} could not be applied with a discount`);
        }
    }
    shoppers.forEach(discount);
        
        
    });

    // book array house book objects that contain title, author.firstName, and author.lastName
    // logged to console to ensure books is set up correctly and can be called correctly
    var books = [
        {title: "The Paper Game",author:{firstName: "Mike", lastName: "Rockefeller"}},
        {title: "The Creators Game",author:{firstName: "Seneca",lastName:"Algonquin"}},
        {title: "Coding for DnD", author:{firstName: "Kenneth",lastName: "Howell"}},
        {title: "DOOGLES", author:{firstName: "Douglas",lastName: "Hirsch"}},
        {title: "My Ukrainian Marriage", author:{firstName: "Vasya",lastName: "Rhaegar"}}
    ];

    console.log(books[0].title);
    console.log(books[2].author.firstName);
    console.log(books[4].author.lastName);
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
