/**
 * Created by Abhishek on 1/11/2017.
 */
function every (arr, cond) {
    for (var i = 0; i < arr.length; i++) {
        if (!cond(arr[i])) {return false;}
    }
    return true;
}

function some (arr, cond) {
    for (var i = 0; i < arr.length; i++) {
        if (cond(arr[i])) {return true;}
    }
    return false;
}
console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false