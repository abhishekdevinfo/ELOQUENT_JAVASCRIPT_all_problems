/*
Write a program taht creates a string that reprents an 8 x 8 grid, using newline characters
to separate lines. At each position of the grid there is either a space or a "#" character.
The characters should form a chess board.
Passing this string to console.log should show something like this:

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

*/
var result = "",
    check  = false;
    width  = 4,
    height = 8;

for (var i = 0; i < height; i++) {

    if (check) value = " #";
    else value = "# ";

    for (var j = 0; j < width; j++) {
        result += value;
    } 
    
    console.log(result);
    result = "";
    check = !check;
} 