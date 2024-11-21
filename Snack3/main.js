// Variables Declaration

num1 = 5;

num2 = 6;

//


// Arrays Declaration

const europeanCapitals = ["Rome", "Paris", "Madrid", "Berlin", "London", "Moscow", "Vienna"];

const valuesInRange = [];

//


// Function Declaration

/**
 * Given an array, returns another array of elements in range.
 * @param {array} list
 * @param {number} min
 * @param {number} max
 * @returns {array}
 */

function isInRange(list, min, max) {

    for (let i = min; i <= max; i++) {
        valuesInRange.push(list[i])
    };

    return valuesInRange;

};

//


// Output

console.log(isInRange(europeanCapitals, num1, num2));

//