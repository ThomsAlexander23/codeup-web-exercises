// function checking input === array: true
function is_array(input){
    return (Array.isArray(input));
}

// function to clone array
function array_Clone(input){
    if (is_array(input) === true) {
        var clonedArray = input.map((x) => x);
        return clonedArray;
    }
    false
}

// function returning first element of array unless otherwise specified at n
function first(input, n = 1){
    if (is_array(input) === true){
        var arrayIndexed = [];
        (n >= input.length) ? n = input.length: n
        for (let i = 0; i < n; i++){
            arrayIndexed.push(input[i])
        }
        return arrayIndexed;
    }
    false
}

// function returning last element of array unless otherwise specified at n
function last(input, n= 1){
    if (is_array(input) === true){
        input.reverse();
        var arrayIndexed = [];
        (n >= input.length) ? n = input.length: n
        for (let i = 0; i < n; i++){
            arrayIndexed.unshift(input[i])
        }
        return arrayIndexed;
    }
    false
}

// function returning array as a concatenated string
function arrayToString(input){
    return (is_array(input)) ? input.join(',') : false
}

// function to insert - where any two consecutive even numbers occur in a number
function dashEven(input){
    if (typeof(input) === 'number'){
        input = input.toString();
        input = input.split("");
        var first, second;
        for (let i = 1; i < input.length; i++){
            first = parseInt(input[i-1]), second = parseInt(input[i]);
            if ((first % 2 === 0) && (second % 2 === 0)){
                input.splice((i-1), 0,'-');
                i += 1
            }
        }
        input = input.join('');
        return input;
    }
    return false
}

// function to sort array in ascending order
function sortAscending(array){
    return (is_array(array)) ? array.sort((a, b) => a - b) : false
}

// function to sort array in descending order
function sortDescending(array){
    return (is_array(array)) ? array.sort((a, b) => b - a) : false
}

// function finding highest occurrence of item within array
function highestOccurrence(array){
    if (is_array(array)) {
        var item, occurrence = 1, count = 0;
        for (let i = 0; i < array.length; i++){
            for (let j = i; j < array.length; j++){
                if (array[i] === array[j]){
                    count += 1;
                }
            }
            if (count >= occurrence){
                occurrence = count;
                item = array[i]
            }
            count = 0
        }
        return console.log(`${item} occurred ${occurrence} times!`)
    }
    return false
    }

// case swap of a string (upper to lower and vice versa)
function caseSwap(input){
    if (typeof(input) === 'string'){
        var newInput = '';
        for (let i = 0; i < input.length; i++){
            if (input[i] === input[i].toUpperCase()){
                newInput += input[i].toLowerCase();
            }
            else if (input[i] === input[i].toLowerCase()){
                newInput += input[i].toUpperCase();
            }
        }
        return newInput
    }
    return false
}

// Program to log nested array to the console
function logArray(array){
    if (is_array(array)){
        for (let i = 0; i < array.length; i++){
            console.log(`Row ${i}`)
            for (let j = 0; j < array.length; j++){
                console.log(j)
            }
        }
    }
    false
}

