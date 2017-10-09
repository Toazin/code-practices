/*
    From a root, create a mirror Tree!
        8
    4           10
2       5           15
        8
    10          4
15          5       2

*/
var BST = require('./BST.js');
var myBst = new BST();

function construct(){
    var arr = [8,4,2,5,10,15];
    while(arr.length > 0){
        myBst.add(arr.shift());
    }
    return;
}

function createMirror(root){
    //console.log("ROOT: ", root.value)
    if(root.left === null && root.right === null){
        return;
    }
    //Swap
    var tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    //console.log("NEW ROOT", root);
    //Traverse tree;
    if(root.left !== null){
        createMirror(root.left);
    }
    if(root.right !== null){
        createMirror(root.right);
    }
    return root;
}

function main(){
    construct();
    console.log(myBst.root);
    var mirror = createMirror(myBst.root);
    console.log("NEW", mirror);
}
main();
