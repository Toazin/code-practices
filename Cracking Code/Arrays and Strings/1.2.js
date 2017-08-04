/*Check Permutation: Given two strings, write a method to decide
if one is a permutation of the other
EX
arre erra -> permutation
arra arre -> no permutation
*/

function checkPermutation_hash(str1, str2){
    str1 = str1.trim();
    str2 = str2.trim();
    if(str1.length != str2.length) return false;
    var dict = {};
    for (var i = 0; i < str1.length; i++) {
        (!dict[str1[i]] ? dict[str1[i]] = 1 : dict[str1[i]]++);
    }
    for (var i = 0; i < str2.length; i++) {
        if(!dict[str2[i]]){
            return false;
        }else{
            dict[str2[i]]--;
        }
    }
    for (var char in dict) {
        if(dict[char] != 0) return false;
    }
    return true;
}

function checkPermutation(str1, str2){
    str1 = str1.trim().split("").sort().join("");
    str2 = str2.trim().split("").sort().join("");
    if(str1.length != str2.length) return false;
    if(str1 != str2) return false;
    // for (var i = 0; i < str1.length; i++) {
    //     if(str1[i] != str2[i]) return false;
    // }
    return true;
}

var str1 = " cacas ";
var str2 = " sacac ";
console.log("HASH('" + str1 + "','" + str2 + "'): " + checkPermutation_hash(str1, str2));
console.log("SORT('" + str1 + "','" + str2 + "'): " + checkPermutation(str1, str2));
