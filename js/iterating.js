(function(){
    "use strict";


    // Var names created and printed length of names
    var names = ["Alex", "Rhaegar", "Vasya", "Olesia"];
    console.log(names.length);

    // printing each name to console
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    // for loop to print values from array names
    for (let i = 0; i < names.length; i++)
        console.log(names[i]);

    // forEach to print values from array names
    names.forEach(name => {
        console.log(name)
    });    

    // function to find first index in array and log to console
    function firstItem(array){
        console.log(array[0]);
    }

    // function to second index in array and log to console
    function secondItem(array){
        console.log(array[1]);
    }

    // function to find last index in array and log to console
    function lastItem(array){
        console.log(array[(array.length -1)]);
    }
    
})();
