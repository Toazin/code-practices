//Is Unique: Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

function isUnique_hash(str){
    if(str.length > 128) return false;
    str = str.trim();
    var hashMap = {};
    for (var i = 0; i < str.length; i++) {
        if(!hashMap[str[i]]){
            hashMap[str[i]] = 1;
        }else{
            return false;
        }
    }
    return true;
}

function isUnique(str){
    if(str.length > 128) return false;
    str = str.trim();
    var arr = str.split('').sort();
    var tmp = "";
    for (var i = 0; i < arr.length; i++) {
        if(tmp == arr[i]){
            return false;
        }
        tmp = arr[i];
    }
    return true;
}

function isUnique_array(str){
    if(str.length > 128) return false;
    str = str.trim();
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        if(arr[str[i]]){
            return false;
        }
        arr[str[i]] = true;
    }
    return true;
}

var str1 = "abcdefg";
var str2 = "abcdefghgh";
var str3 = "";
var str4 = " asd    ";
console.log("NO DATA STTRUCTURE'" + str1 + "': " + isUnique(str1));
console.log("NO DATA STTRUCTURE'" + str2 + "': " + isUnique(str2));
console.log("NO DATA STTRUCTURE'" + str3 + "': " + isUnique(str3));
console.log("NO DATA STTRUCTURE'" + str4 + "': " + isUnique(str4));

console.log("DATA STTRUCTURE HASH'" + str1 + "': " + isUnique_hash(str1));
console.log("DATA STTRUCTURE HASH'" + str2 + "': " + isUnique_hash(str2));
console.log("DATA STTRUCTURE HASH'" + str3 + "': " + isUnique_hash(str3));
console.log("DATA STTRUCTURE HASH'" + str4 + "': " + isUnique_hash(str4));

console.log("DATA STTRUCTURE ARRAY'" + str1 + "': " + isUnique_array(str1));
console.log("DATA STTRUCTURE ARRAY'" + str2 + "': " + isUnique_array(str2));
console.log("DATA STTRUCTURE ARRAY'" + str3 + "': " + isUnique_array(str3));
console.log("DATA STTRUCTURE ARRAY'" + str4 + "': " + isUnique_array(str4));
