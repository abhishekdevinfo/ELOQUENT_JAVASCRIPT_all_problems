/* Write a loop that makes seven calls to console.log to output the folling trinagles:

#
##
###
####
#####
######
#######

*/
var result = "";
for (var i = 0; i < 7; i++) {
    for (var j = 0; j <= i; j++) {
        result += "#";
    }
    console.log(result);
    result = "";
};
