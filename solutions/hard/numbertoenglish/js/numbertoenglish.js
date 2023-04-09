/**
 * @param {number} num
 * @return {string}
 */
const ones = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
    "Eighteen", "Nineteen"
];
const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

const thousands = ["", "Thousand", "Million", "Billion"];

var numberToWords = function(num) {
    if (num === 0) return "Zero";
    let i = 0;
    let words = "";
    while (num > 0) {
        if (num % 1000 !== 0) {
            words = helper(num % 1000) + thousands[i] + " " + words;
        }
        num = Math.floor(num / 1000);
        i++;
    }
    return words.trim();
};

var helper = function(num) {
    if (num === 0) return "";
    else if (num < 20) return ones[num] + " ";
    else if (num < 100) return tens[Math.floor(num / 10)] + " " + helper(num % 10);
    else return ones[Math.floor(num / 100)] + " Hundred " + helper(num % 100);
};

// Example usage:
console.log(numberToWords(123456789)); // One Hundred Twenty Three Million Four Hundred Fifty Six Thousand Seven Hundred Eighty Nine
console.log(numberToWords(0)); // Zero
console.log(numberToWords(Math.pow(2, 31) - 1)); // Two Billion One Hundred Forty Seven Million Four Hundred Eighty Three Thousand Six Hundred Forty Seven
