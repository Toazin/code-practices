/*
Replace all blank space with '%20'
*/
function URLify (str) {
    var replacement = '%20';
    return str.trim().split(" ").join(replacement);
}


var inp = "Mr John Smith      ";
console.log(URLify(inp));
