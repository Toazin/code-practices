function Node(val){
    this.value = val;
    this.next = null;

    this.appendTail = function(nval){
        var n = this;
        while(n.next != null){
            n = n.next;
        }
        n.next = new Node(nval);
    }

    this.remove_first = function(nval){
        var n = this;
        //Check first
        if(n.value == nval){
            //
            return true;
        }
        //Check other
        while(n.next != null){
            if(n.next.value == nval){
                n.next = n.next.next;
                return true;
            }
            n = n.next;
        }
        n.next = new Node(nval);
        return false;
    }
}

module.exports = Node;
