/*
o(3n) == O(n) ;)
*/
function isPermutation (str1, str2) {
    if(str1.length != str2.length) return "NOT PERMUTATIONS";
    var d1 = {};
    var d2 = {};
    for(var i = 0; i<str1.length; i++){
        d1[str1[i]] ? d1[str1[i]]++ : d1[str1[i]] = 1;
    }
    for(var i = 0; i<str2.length; i++){
        d2[str2[i]] ? d2[str2[i]]++ : d2[str2[i]] = 1;
    }
    for(var c in d1){
        if(d2[c] != d1[c]) return "NOT PERMUTATIONS";
    }
    return "PERMUTATION";
}

/*
One Line solution! :D
split -> n join -> n sort() -> n
O(6N) --> O(N)
*/
function isPermutation2 (str1, str2) {
    return str1.split("").sort().join("") == str2.split("").sort().join("") ? "PERMUTATION":"NOT PERMUTATION";
}


var in1 = "aaaaaaaaaabbdddds";
var in2 = "aaaaaadsaaabbdddaa";
console.log(isPermutation2(in1,in2));
