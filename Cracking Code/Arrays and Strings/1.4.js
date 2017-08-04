/*
Palindrome Permutation: Given a string, write a function to check if it is a
permutation of a palindrome. A palindrome is a word or phrase that is the
same forwards and backwards. A permutation is a rearrangement of letters.
The palindrome does not need to be limited to just dictionary words.

EXAMPLE
Input: Tact Coa
Output: True (permutations:"taco cat'; "atco cta'; etc.)
*/

function palindromePermutation(str){
    //Dos escenarios PAR o INPAR
    //PAR Los caracteres tienen que ser PARES
    //INPAR SOLO un caracter puede ser Inpar
    if(!str) return false;
    str = str.trim().toLowerCase();
    var dict = {};
    var trueLenght = 0;
    for (var i = 0; i < str.length; i++) {
        if(str[i] != " "){
            (!dict[str[i]] ? dict[str[i]] = 1 : dict[str[i]]++);
            trueLenght++;
        }
    }
    var pair = trueLenght % 2 == 0;
    if(pair){
        for (var char in dict) {
            if(dict[char] != " " && dict[char] % 2 != 0) return false;
        }
    }else{
        var noPairCount = 0;
        for (var char in dict) {
            if(dict[char] != " " && dict[char] % 2 != 0) noPairCount++;
        }
        if(noPairCount >1) return false;
    }
    return true;
}

var input = "Tact Coao";
console.log("HAS PERMUTATION('"+ input + "'): ", palindromePermutation(input));
