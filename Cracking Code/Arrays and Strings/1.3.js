/*
URLify: Write a method to replace all spaces in a string with '%2e:
You may assume that the string has sufficient space at the end to hold
the additional characters, and that you are given the "true" length of
the string. (Note: if implementing in Java, please use a character array
so that you can perform this operation in place.)

EXAMPLE
Input: "Mr John Smith", 13
Output: "Mr%2eJohn%2eSmith"
*/
const replace = "%20";

function URLify(str, len){
    if(!str) return "";
    str = str.split("");
    for (var i = 0; i < len; i++) {
        if(str[i] == " "){
            str[i] = replace;
        }
    }
    return str.join("");
}

var input = "Mr John Smith ";
var length = input.length;
console.log("URLify('" + input + "'): ", URLify(input, length));
