/*
Toatzin
Problem: Find if a permutation is a palindrome.
*/
function isPermutationPalindrome (str) {
    if(!str) return "INVALID";
    var d = {};
    var n1Count = 0;
    //Clean String
    str = str.trim().split(" ").join("");
    for (var i = 0; i < str.length; i++) {
        if(d[str[i]]){
            d[str[i]]++;
            //n1Count--;
        }else{
            d[str[i]] = 1;
            //n1Count++;
        }
    }
    console.log("DEBUG_D: ", d);
    //console.log("DEBUG_NC:", n1Count);
    // if(n1Count > 1) return "NOT A PERMUTATION OF A PALINDROME";
    // if(str.length % 2 == 0 && n1Count != 0) return "NOT A PERMUTATION OF A PALINDROME";//n1Count must b 0
    for(var c in d){
        if(d[c] == 1) n1Count++;
        if(d[c] % 2 != 0 && n1Count>1){
            return "asdNOT A PERMUTATION OF A PALINDROME";
        }

    }

    return "A PERMUTATION OF A PALINDROME";
}

var input = ("lava la tina anita");
console.log("String: '" + input + "' is : " + isPermutationPalindrome(input));
