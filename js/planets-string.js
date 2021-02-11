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



    
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

})();
