/*
Remove Dups: Write code to remove duplicates from an unsorted linked list.
*/
var Node = require('./LinkedList.js');

function remove_dups(head){
    var hashMap = {};
    var n = head;
    while(n.next != null){
        if(hashMap[n.value]){
            console.log("BORRANDO: " + n.value);
            n.remove_first(n.value);
        }else{
            hashMap[n.value] = true;
        }
        console.log(n.value);
        n = n.next;
    }
    return n;
}

function printL(head){
    console.log("DUDE");
    var n = head;
    while(n.next != null){
        console.log(n.value);
        n = n.next;
    }
}

function init(){
    var l = new Node(0);
    l.appendTail(0);
    l.appendTail(2);
    l.appendTail(2);
    l.appendTail(5);
    l.appendTail(4);
    l.appendTail(8);
    return l;
}

var h = init();
printL(remove_dups(h));
