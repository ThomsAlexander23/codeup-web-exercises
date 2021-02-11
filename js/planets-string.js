(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // Exercise: split string at | and saved array in var planetsArray
    // logged planetsArray for confirmation
    planetsArray = planetsString.split("|");
    console.log(planetsArray);


    // joined array with <br> tags
    // useful for creating lists or joining names together first and last
    planetsArray.join("<br>");

    // bonus:
    // created new array with planets
    // added <ul> opening & closeing tags to array
    // join the array with <li>
    var planetsArray2 = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
    planetsArray2.unshift("<ul>");
    planetsArray2.push("</ul>");
    planetsArray2.join("<li>");

})();
