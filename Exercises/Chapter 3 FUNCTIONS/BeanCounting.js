/*
Write a function countBs that takes a string as its only argument and re-
turns a number that indicates how many uppercase “B” characters are in the
string.
Next, write a function called countChar that behaves like countBs , except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.
*/

function countChar (string, value) {
    var count = 0;
    var compare = value;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === compare) count++;
    }
    return count;
}

function countBs (string) {
   return countChar(string, "B");
}

