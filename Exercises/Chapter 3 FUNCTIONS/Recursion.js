/*
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N − 2.
Define a recursive function isEven corresponding to this description.
The function should accept a number parameter and return a Boolean.
*/

function isEven (value) {
    if (value >= 0 && value <= 1 ) {
        return (value === 0) ? true : false
    } else if (value < 0) {
        return isEven(-value);
    } else {
        return isEven(value - 2);
    }
}
