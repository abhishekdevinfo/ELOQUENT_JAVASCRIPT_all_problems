/*
A List
Objects, as generic blobs of values, can be used to build all sorts of data
structures. A common data structure is the list (not to be confused with the
array). A list is a nested set of objects, with the first object holding a refer-
ence to the second, the second to the third, and so on.
var list = {
value: 1,
rest: {
value: 2,
rest: {
value: 3,
rest: null
}
}
};
A nice thing about lists is that they can share parts of their structure.
For example, if I create two new values {value: 0, rest: list} and {value:
-1, rest: list} (with list referring to the variable defined earlier), they are
both independent lists, but they share the structure that makes up their last
three elements. In addition, the original list is also still a valid three-element
list.

Write a function arrayToList that builds up a data structure like the
previous one when given [1, 2, 3] as an argument,
*/

function arrayToList (arr) {
    var lengthArray = arr.length;
    var list = {};
    for (var a = lengthArray - 1; a >= 0; a--) {
        if (list.rest === undefined) var restValue = null;
        else restValue = list;
        var rest = {
            "value": arr[a],
            "rest" : restValue
        }
        list = rest; 
    }   
    return list; 
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend (element, list) {
    return list = {
        "value": element,
        "rest" : list
    };    
}

function nth (list, num) {
    var count = -1;
    var temp;
    for (var node = list; node; node = node.rest) {
        temp = node.value;
        count += 1;    
        if (count === num) {
            return temp;
        }    
    }
    return undefined;
}

// function nth(list, n) {
//   if (!list)
//     return undefined;
//   else if (n == 0)
//     return list.value;
//   else
//     return nth(list.rest, n - 1);
// }


console.log(arrayToList([10, 20, 30]));
console.log(nth(arrayToList([10, 20, 30]), 1));