// NOTE: If an input is invalid, simply return the string "Invalid input"


// Challenge 1: Write a function called swapFirstAndLast that takes in an array as a parameter.
// Swap the values of the first and last index without using array destructuring.
// Return the updated array

function swapFirstAndLast(oldArray) {
    if (Array.isArray(oldArray) && oldArray.length > 1) {
        let newArray = oldArray.slice();
        let lastIndex = newArray.length - 1;
        let newFirst = newArray[lastIndex];
        let newLast = newArray[0];
        newArray[0] = newFirst;
        newArray[lastIndex] = newLast;
        return newArray;
    } else {
        return 'Invalid input';
    }
}


// Challenge 2: Write a function called squareFirstIndex that takes in an array as a parameter.
// Return the square of a number held at the first index.

function squareFirstIndex(myArray) {
    if (Array.isArray(myArray) && myArray.length >= 1 && typeof(myArray[0]) == 'number') {
        let firstIndex = myArray[0];
        return firstIndex ** 2; // square first index
    } else {
        return 'Invalid input';
    }
}


// Challenge 3: Write a function called getLongerArray that takes in two arrays as parameters.
// Use a ternary operator and return the array that is longer.

function getLongerArray(arrayA, arrayB) {
    if (Array.isArray(arrayA) && Array.isArray(arrayB) && (arrayA.length != arrayB.length)) {
        let longerArray = (arrayA.length > arrayB.length) ? arrayA : arrayB;
        return longerArray
    } else {
        return 'Invalid input';
    }
}


// Challenge 4: Write a function called arrayHasValue that takes in a value and an array.
// Return a boolean if the value exists in the array.

function arrayHasValue(value, myArray) {
    if (value && (Array.isArray(myArray))) {
        let existCheck = (myArray.includes(value));
        return existCheck;
    } else {
        return 'Invalid input';
    }
}


// Challenge 5: Write a function called getLastIndexOf that takes an array and a value as parameters.
// Return the highest index number where that value was found (ie the furthest point it exists in the array)

function getLastIndexOf(myArray, value) {
    if (Array.isArray(myArray) && value) {
        let highestIndex = myArray.lastIndexOf(value);
        return highestIndex;
    } else {
        return 'Invalid input';
    }
}





// Challenge 6: Write a function called getNumberOfTimes that takes in an array and a string.
// Return a count of how many times the string exists in the array.







// Challenge 7: Write a function called findAboveFreezing that takes in an array
// Return a string literal that says "Temperature found was ---- degrees Farenheit."








// Challenge 8: Write a function called returnString that takes an array as a parameter.
// Return the array as a string with an ampersand as the separator.







// Challenge 9: Write a function called sortArrayBasedOnNumber that takes in an array and a number.
// Arrays must only contain one data type.
// If the number is odd, return the array sorted in descending order.
// If the number is even, return the array sorted in ascending order






// Challenge 10: Write a function called concatArrays that takes in two arrays as parameters.
// Return the concatonation of the two arrays in order as long as neither holds a string as a value at any index.








// Challenge 11: Write a function called popAndShift that takes in an array as a parameter.
// Example input versus output:
// Original input array: ["yelow", "green", "blue", "red"]
// Intended output array: ["red", "yellow", "green", "blue"]







// Challenge 12: Write a function called oddValuesAtEvenIndex that takes an array as a parameter
// Return a new array that contains all the odd values of the original array that were located at an even index.







// Challenge 13: Write a function called getUpperCase that takes in an array as a parameter.
// Translate all strings in the array to upper case.
// Return only an array of only the string values.








// Challenge 14: Write a function called deleteAllOddValues that takes in an array.
// Use the delete() array method to delete any odd numbers from the array, including any values that can be coerced into numbers.
// Return the updated array.









// Challenge 15: Write a function called getCatNumber that takes in an array of nested arrays as a first parameter, and a string of a cat's name a the second parameter.
// Return the age of the first cat found with that name.







// Stretch Goal #1:
// Write a function called getPaginationArray that takes in an array and a page number as parameters.
// Only five items from the array can be shown on a given web page when pagination is clicked. They must be grouped in their original order.
// Return a new array. At each index of the new array will be the five items shown for each page of pagination.







// Stretch Goal #2:
// Write a function called sparseToDense that takes in an array.
// If the array is sparse, return a dense version of the array.
// If the array is already dense, return the original array.







// Stretch Goal #3:
// Write a function called findAndConvertTemp that takes in an array of arrays, as well as a temperature as parameters. Both the array and the temperature are in Farenheit.
// Find the first temperature in the array that exceeds the input parameter.
// Return the string literal `Temperature was ----- degrees Celcius on date ------."




module.exports = {
    swapFirstAndLast,
    squareFirstIndex,
    getLongerArray,
    arrayHasValue,
    getLastIndexOf,
};