/*
You are given a list of products and a list of price that are correct.
Anohter input is a list of products and a list of prices, but you dont know if its correct.
Author: Toatzin Padilla Arias
*/

function checkList (price1, product1, price2, product2) {
  //Dict of correct.
  var dict = {};
  let cnt = 0;
  for (var i = 0; i < product1.length; i++) {
    dict[product1[i]] = price1[i];
  }
  for (var i = 0; i < product2.length; i++) {
    if(dict[product2[i]] != price2[i]) cnt++;
  }

  return cnt;
}


let p1 = [23,24,25,26];
let pp1 =['chocolate','nesquik','leche','gallets'];

let p2 = [25,23,26,24];
let pp2 =['leche','chocolate','gallets','nesquik'];

console.log("Incorrect: ", checkList(p1,pp1,p2,pp2));
