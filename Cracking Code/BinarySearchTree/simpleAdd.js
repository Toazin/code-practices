var BST = require('./BST.js');
var AVLBST = require('./AVL.js');

function mainTree(){
    var myBST = new BST();
    var toAdd = [3,7,4,6,5,1,10,2,9,8];
    while(toAdd.length > 0){
        myBST.add(toAdd.shift());
    }
    console.log(myBST.toObject());
}

function avlTree(){
    var myAVLBST = new AVLBST();
    for(var i = 1; i< 100; i++){
        myAVLBST.add(i);
    }

    console.log(myAVLBST.toObject());
}

avlTree();
//mainTree();
