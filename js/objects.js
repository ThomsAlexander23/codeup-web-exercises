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
    var greeting = function (){
        console.log(`Hello from ${this.firstName} ${this.lastName}`);
    }
    person.sayHello = greeting
    console.log(person.sayHello());

    // shoppers uncommented
    // function discount passed with shoppers
    // discount displays shopper name and total and when applicable a discount from total
    // forEach added to loop through object shoppers
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

    // displayBookInfo is passed books and i to output to console book index+1 title and author to new lines
    //for each is used to loop through array books with the displayBookInfo function
    function displayBookInfo(books,i){
        console.log(`Book # ${i+1}`);
        console.log(`Title: ${books.title}`);
        console.log(`Author: ${books.author.firstName} ${books.author.lastName}`);
        console.log("---")
    }
    books.forEach(displayBookInfo);

    // createBook to get input from user to create new entry to array books
    function createBook(title, name){
        var nameArray = name.split(' ')
        var book = {
            title: title,
            author: {
                firstName: nameArray[0],
                lastName:  nameArray[1]
            }
        };
        return book
    }

    books.push(createBook("WindyWagon", "louis sue"));
    console.log(books)
    
    //function to display book in a format that doesnt use indexing
    // showBookInfo displays book values
    function showBookInfo(book){
        console.log(`Book Title: ${book.title}.`) 
        console.log(`Written by: ${book.author.firstName} ${book.author.lastName}`)
    };

    // forEach used to access and display all book objects & properties  currently in books
    books.forEach(showBookInfo);
    
    // proof for fun that showBookInfo function can accept createBook to display the created book before pushing to books
    books.push(showBookInfo(createBook("Boats N' Hoes", "Dale Doback")));

})();
