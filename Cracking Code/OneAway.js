
function oneAway (in1, in2) {
    var l1 = in1.length;
    var l2 = in2.length;
    if(Math.abs(l1-l2) > 2) return false;
    //if(l1 > l2) //Possible 1 remove;
    //if(l1 < l2) //possible 1 addition;

    var d1 = {};
    var d2 = {};
    for (var i = 0; i < in1.length; i++) {
        d1[in1[i]] ? d1[in1[i]]++ : d1[in1[i]] = 1;
    }
    for (var i = 0; i < in2.length; i++) {
        d2[in2[i]] ? d2[in2[i]]++ : d2[in2[i]] = 1;
    }
    var bigger;
    var smaller;
    if(l1>l2){
        bigger = d1;
        smaller = d2;
    }else{
        bigger = d2;
        smaller = d1
    }
    var differences = 0;
    for(var c in bigger){
        if(!smaller[c]) differences++;
        if(differences > 1) return false;
    }
    return true;

}

var in1 = "pale";
var in2 = "pal";
console.log("Str: " + in1 + " - " + in2 + " are: " + oneAway(in1,in2));
