// program to list all object properties of an object
function listKeys(object){
    var properties = Object.keys(object)
    for (let i = 0; i < properties.length; i++){
        console.log(properties[i]);
    }
}

// program to delete rollno property from object
console.log(listKeys(student));
delete student.rollno;
console.log(listKeys(student));

// length of object
student.rollno = 12;
console.log(Object.keys(student).length)


// library object for next program
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

// function to display library object
function bookStatus(library){
    for (let i = 0; i < library.length; i++){
        console.log(`author: ${library[i].author},\ntitle: ${library[i].title},\nreadingStatus: ${library[i].readingStatus}`)
    }
}

// function to generate volume of a cylinder up to four decimal places
function cylinderVolume(radius, height){
    console.log((Math.PI*(radius**2)*height).toFixed(4))
}

//