/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    let i = s.length;
    while (i > 0) {
        if (isPalindrome(s.substr(0, i))) {
            break;
        }
        i--;
    }
    return s.substr(i).split('').reverse().join('') + s;
};

function isPalindrome(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
