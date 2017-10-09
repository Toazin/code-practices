var Node = require('./AVLNode.js');

function AVL(){
    this.root = null;

    this.toObject = function(){
        return this.root;
    }

    this.add = function(value) {
        if(!this.root){
            this.root = new Node(value);
        }else{
            this.root.add(value);
        }
    }
}

module.exports = AVL;
