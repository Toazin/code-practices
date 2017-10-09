var Node = require('./myNode.js');

function BST(){
    this.root = null;

    this.toObject = function(){
        return this.root;
    }

    this.add = function(value) {
        if(this.root === null){
            this.root = new Node(value);
            return;
        }

        let current = this.root;
        while(true){
            if(current.value > value){
                //Go left
                if(current.left){
                    current = current.left;
                }else{
                    current.left = new Node(value);
                    return;
                }
            }else{
                //Go right
                if(current.right){
                    current = current.right;
                }else{
                    current.right = new Node(value);
                    return;
                }
            }
        }
    }
}

module.exports = BST;
