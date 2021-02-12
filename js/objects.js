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
        

    // book array house book objects that contain title, author.firstName, and author.lastName
    // logged to console to ensure books is set up correctly and can be called correctly
    var books = [
        {title: "The Paper Game",author:{firstName: "Mike", lastName: "Rockefeller"}},
        {title: "The Creators Game",author:{firstName: "Seneca",lastName:"Algonquin"}},
        {title: "Coding for DnD", author:{firstName: "Kenneth",lastName: "Howell"}},
        {title: "DOOGLES", author:{firstName: "Douglas",lastName: "Hirsch"}},
        {title: "My Ukrainian Marriage", author:{firstName: "Vasya",lastName: "Rhaegar"}}
    ];

    // console.log(books[0].title);
    // console.log(books[2].author.firstName);
    // console.log(books[4].author.lastName);

    // displayBookInfo is passed books and i to output to console book index+1 title and author to new lines
    //for each is used to loop through array books with the displayBookInfo function
    function displayBookInfo(books,i){
        console.log(`Book # ${i+1}`);
        console.log(`Title: ${books.title}`);
        console.log(`Author: ${books.author.firstName} ${books.author.lastName}`);
    }
    books.forEach(displayBookInfo);

    // createBook to get input from use to create new entry to array books
    function createBook(title = prompt("enter title"),first = prompt("enter author first name"),last = prompt("enter author last name")){
        book = {};
        book.title = title;
        book.author = {};
        book.author.firstName = first;
        book.author.lastName = last;
        books.push(book);
    }

    
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
    // var bookEntry = confirm("would you like to add a book?")
    // while (bookEntry === false){
    //     bookEntry = confirm("Would you like to add a book?")
    // }

    // if (bookEntry === true){
    //     do{
    //     createBook();
    //     books.forEach(displayBookInfo);
    //     var addAnother = confirm("Would you like to add another book?");}
    //     while (addAnother === true)
    // }
    // else {
    //     console.log("Thanks you for your entry!")
    // }

})();
