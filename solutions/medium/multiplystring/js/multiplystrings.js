/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    // Convert string numbers to numbers
    const int1 = parseInt(num1);
    const int2 = parseInt(num2);

    // Multiply the numbers
    const result = int1 * int2;

    // Convert the result back to a string
    const strResult = result.toString();

    return strResult; // Output: "6"
};
