/*
Given a binary tree t and an integer s,
determine whether there is a root to leaf path in t such that the sum of
vertex values equals s.

EX:   SUM 7
      4
     / \
    1   3
   /   / \
  -2  1   2
    \    / \
     3  -2 -3
     OUTPUT = TRUE... path 4-3-2-(-2)
*/
var BST = new (require('./BST.js'))();
var Node = require('./myNode.js');

function constructExample(){
    BST.root = new Node(4);
    BST.root.left = new Node(1);
    BST.root.left.left = new Node(-2);
    BST.root.left.left.right = new Node(3);
    BST.root.right = new Node(3);
    BST.root.right.left = new Node(1);
    BST.root.right.right = new Node(2);
    BST.root.right.right.left = new Node(-2);
    BST.root.right.right.right = new Node(-3);
    return;
}

function hasPathSum(root, objective, sum){
    //console.log("SEARCHING IN", root.value, sum);
    if(root.left === null && root.right === null){
        //console.log("I'm A LEAF", objective == sum, objective, sum)
        if(objective == sum){
             return true;
        }else{
            return false;
        }
    }

    //Traverse
    if(root.left !== null){
        var l = hasPathSum(root.left, objective, sum + root.left.value);
    }
    if(root.right !== null){
        var r = hasPathSum(root.right, objective, sum + root.right.value);
    }

    return r || l;
}

function main(){
    constructExample();
    console.log("BST", BST.root)
    var sum = 6 ;
    console.log(hasPathSum(BST.root, sum, BST.root.value));
}

main();
