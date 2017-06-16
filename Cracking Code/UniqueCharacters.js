function hasUnique (str) {
    if(!str || str.length == 0) return "Invalid input";
    var arr = str.split("");
    var d ={};
    for(i = 0; i< str.length; i++){
        if(d[str[i]]){
            return "Is not Unique";
        }
        d[str[i]] = 1;
    }
    return "Its Unique";
}





var input = "abcda";
console.log(hasUnique(input));
