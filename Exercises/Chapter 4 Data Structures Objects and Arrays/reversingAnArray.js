/*
write two functions,
reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
as an argument and produces a new array that has the same elements in
the inverse order. The second, reverseArrayInPlace, does what the reverse
method does: it modifies the array given as argument in order to reverse
its elements. Neither may use the standard reverse method.
*/

var reverseArray = function (arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        newArray.unshift(arr[i]);
    }
    return newArray;
}

var firstArray = [1,2,3,4,5];

function reverseArrayInPlace (array) {
    var arrayLength = Math.floor(array.length / 2);
    for (var i = 0; i < arrayLength; i++) {
        var temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length -1 -i] = temp;
    }
    return array;
}


console.log(reverseArrayInPlace(first));
console.log(first);