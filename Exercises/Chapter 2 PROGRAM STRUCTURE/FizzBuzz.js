/*
Write a program that uses console.log to print all the numbers from 1 to 100, with three exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, for number divisible by 5 (and not 3),print "Buzz" instead, 
and print "FizzBuzz" for numbers that are divisible by both 3 and 5. 
*/
var result = "";
for (var i = 1; i <= 100; i++) {
    if ((i % 3 === 0 ) || (i % 5 === 0)) {
        if (i % 3 === 0 ) result += "Fizz"; 
        if (i % 5 === 0) result += "Buzz";
        console.log(result);
        result = "";
    } else console.log(i);
}
