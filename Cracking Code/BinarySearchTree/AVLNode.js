function AVLNode(x){
    this.value = x;
    this.left = null;
    this.right = null;
    this.height = 1;

    this.add = function(value){
        if(this.value > value){
            //Go left
            if(this.left){
                //Si existe left.. delega el add
                this.left.add(value);
            }else{
                //Si no existe agrega!
                this.left = new AVLNode(value);
                return;
            }
            // Adjust Height
            if(!this.right || this.right.height < this.left.height){
                this.height = this.left.height + 1;
            }

        }else{
            //Go right
            if(this.right){
                this.right.add(value);
            }else{
                this.right = new AVLNode(value);
                return;
            }
            if(!this.left || this.left.height < this.right.height){
                this.height = this.right.height + 1;
            }
        }
        this.balance();
    }

    this.balance = function(){
        const rightHeigth = (this.right) ? this.right.height: 0;
        const leftHeigth = (this.left) ? this.left.height: 0;
        if(leftHeigth > rightHeigth + 1){
            //Check if double rotation
            const leftRightHeight = (this.left.right) ? this.left.right.height : 0;
            const leftLeftHeight = (this.left.left) ? this.left.left.height : 0;

            if(leftRightHeight > leftLeftHeight){
                //DOUBLE rotation
                this.left.rotateRR();
            }
            this.rotateLL();
        }else if(rightHeigth > leftHeigth + 1){
            //Check if double rotation
            const rightRightHeight = (this.right.right) ? this.right.right.height : 0;
            const rightLeftHeight = (this.right.left) ? this.right.left.height : 0;
            if(rightLeftHeight > rightRightHeight){
                //DOUBLE rotation
                this.left.rotateLL();
            }
            this.rotateRR ();
        }
    }

    this.rotateRR = function() {
        const valueBefore = this.value;
        const leftBefore = this.left;
        this.value = this.right.value;
        this.left = this.right;
        this.right = this.right.right;
        this.left.right = this.left.left;
        this.left.left = leftBefore;
        this.left.value = valueBefore;
        this.left.updateInNewLocation();
        this.updateInNewLocation();
    }
    this.rotateLL = function() {
        const valueBefore = this.value;
        const leftBefore = this.right;
        this.value = this.left.value;
        this.right = this.left;
        this.left = this.left.left;
        this.right.left = this.right.right;
        this.right.right = rightBefore;
        this.right.value = valueBefore;
        this.right.updateInNewLocation();
        this.updateInNewLocation();
    }

    this.updateInNewLocation = function(){
        if(!this.right && !this.left){
            this.height = 1;
        }else if(!this.right || (this.left && this.right.height < this.left.height)){
            this.height = this.left.height +1;
        }else{
            this.height = this.right.height + 1;
        }
    }
}

module.exports = AVLNode;
