/*
Find the nth node from the last node of the LL
*/
var LL = require('./node.js');
var myLL = new LL(0);

function createLL(){
    for(var i = 1; i< 20; i++){
        myLL.appendToTail(i);
    }
    return;
}

function findNth(root, n){
    var res = root;
    var head = root;
    while(n > 0){
        head = head.next;
        console.log("HEAD: ", head.value);
        n--;
    }
    console.log("HASTA AQUI ")
    while(head != null){
        console.log("HEAD: ", head.value);
        res = res.next;
        head = head.next;
    }
    console.log("RES: ", res.value);
    return res;
}

function main(){
    var nth = 3; //17
    createLL();
    var n = findNth(myLL, nth);
    console.log("RESULT", n)
}

main();
