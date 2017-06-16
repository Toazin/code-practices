
function reverseParentesis(s)
{
  var finalArray =[];
  var i = 0;
  var tmpStack = [];
  while(s[i] != undefined)
  {
    console.log(s[i]);
    finalArray.push(s[i]);
    if(s[i] == ")")
    {
      while(finalArray[finalArray.length-1] != "(")
      {
        tmpStack.push(finalArray.pop());
      }
      finalArray.pop();
      tmpStack.shift();

      console.log("TempStack: ", tmpStack);
      while(tmpStack.length > 0)
      {
        finalArray.push(tmpStack.shift());
      }
      console.log("final Array: ", finalArray);
    }
    i++;
  }
  return finalArray;
}



var input = "hola(ab(cd))"; // holasa
console.log(reverseParentesis(input));
