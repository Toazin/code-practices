var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Zeros', value: 37 }
];

var items2 = [40, 100, 1, 5, 25, 10];

///PARA OBJETOS!! USANDO ATRIBUTO NAME!
function  compare(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
}

//PARA NUMEROS! POR QE STRING NUMEROS NO SIRVE.
//Lo mismo que (a,b)=>(a-b) sin objeto.
function compare2(a,b){
  return a.value-b.value;
}

function compare3 (a,b) {
  return a-b;
}

console.log(items.sort(compare)); //POR NAME
console.log(items.sort(compare2)); // POR VALUE
console.log(items2.sort()); //RESULTADO MALO POR QE SON NUMBRES
console.log(items2.sort((a,b)=>(a-b))); //CON ARROW FUNCTION
console.log(items2.sort(compare3));
