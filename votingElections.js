/*
Excercie:
From a list of candidates, return the one with highest icidences. If a tie, order it alphabetically and return the LAST.
Author: Toatzin Padilla Arias
*/

const candidateNames = ['Toatzin', 'Juan', 'Menchaca', 'Padilla', 'Cynthia', 'Francisco', 'Cuauhtli'];

function winnerElection (n, candidateList) {
  //Use Dictionary to update votes for each one.
  if(!n || n == 0 || !candidateList || candidateList.length == 0){
    throw new Error("Can't evaluate candidets of an empty list");
  }
  let candidateDict = {};
  let max = 0;
  for(var i = 0; i< n; i++)
  {
    if(candidateDict[candidateList[i]]){
      candidateDict[candidateList[i]]++;
      if(candidateDict[candidateList[i]] > max) max = candidateDict[candidateList[i]];
    }else{
      candidateDict[candidateList[i]] = 1;
    }
  }
  console.log("Results: ", candidateDict);
  let maxArray = [];
  for (var candidate in candidateDict) {
    if(candidateDict[candidate] == max){
      maxArray.push(candidate);
    }
  }
  return maxArray.sort()[maxArray.length -1];
}

function randomList (n) {
  let newList = [];
  for(var i = 0; i<n;i++){
    var rand = Math.floor(Math.random() * candidateNames.length);
    newList.push(candidateNames[rand])
  }
  return newList;
}

let n = 100000;
let candidateList = randomList(n);
console.log("Winner is: ", winnerElection(n, candidateList));
