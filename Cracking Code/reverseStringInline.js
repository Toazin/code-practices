function reversed (str) {
    return str.split("").reverse().join("");
}
/*
Inline and in a recursion.
*/
function reversed2 (str, reversed) {
    //console.log("STR: ", str);
    //console.log("Reversed: ", reversed);
    //exit case
    if(str.length < 1) return reversed;
    return reversed2(str.slice(0,str.length-1), reversed + str[str.length-1]);
}


var input = "im a verga";
console.log(reversed2(input, ""));
