function deepEqual (value1, value2) {
    if (value1 === value2) return true;
    if (value1 == null || typeof value1 != "object" || value2 == null || typeof value2 != "object") {
        return false;
    }
    var count1 = 0,
        count2 = 0;
    for (var propertities in value1) {
        count1 += 1;
    }

    for (var propertities in value2) {
        count2 += 1;
        if (!(propertities in value1) || !(deepEqual(value1[propertities], value2[propertities]))) {
            return false;
        }
    }
    return count1 === count2;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true