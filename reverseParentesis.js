/*
Reverse string within parenteiss, it can be stacked
Author: Toatzin Padilla Arias
*/

function reverseParentesis (w) {
  let reversed = [];
  let tmpStack = [];
  let i = 0;
  let cnt = 0;
  while (w[i] != undefined || cnt <2)
  {
    console.log("W[i]", w[i]);
    reversed.push(w[i]);
    console.log("reversed", reversed);
    if(w[i] == ')')
    {
      w = w.slice(0,i) + w.slice(i+1,w.length);
      console.log("INSIDE IF");
      reversed.pop();
      while(w[i] != '(')
      {
        console.log("SEARCHING (", w[i]);
        reversed.pop();
        tmpStack.push(w[i]);
        i--;
      }
      tmpStack.shift();
      console.log("SALI2", tmpStack);
      while(tmpStack.length > 0)
      {
        reversed.push(tmpStack.shift());
        i++;
      }
    }
    i++
    cnt++;
  }


  return reversed;
}


let input = "holaque(ha(ce))";
console.log("Reversed String:", reverseParentesis(input));
