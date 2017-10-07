var Node = function (d) {
    this.value = d;
    this.next = null;
    this.length = 1;

    this.appendToTail = function(d) {
        var end = new Node(d);
        var n = this;
        while (n.next != null) {
            n = n.next;
        }
        n.next = end;
        this.length++;
    }

    this.print = function(){
        var pointer = this
        while(pointer != null){
            console.log(pointer.value);
            pointer = pointer.next;
        }
    }

    this.length_ = function () {
        return this.length;
    }

}

module.exports = Node;
