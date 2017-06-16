

String.prototype.replaceAll = function(search, replacement) {
//var target = this;
  console.log("split: ", this.split(search));
  console.log("join: ", this.split(search).join(replacement));
    return this.split(search).join(replacement);
};

var str = "dude whats up !!";
var n = str.search(/whats/i);
var n2 = str.search("up");
console.log("n: ", n2)




var str2 = "dude dude dude dudes a b simon";
var a = str2.replaceAll("dude", "");
console.log("a: ", a);
