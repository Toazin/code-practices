var bst = require('./BST.js');
var myBst = new bst();

//Explicacion
/*
    Escencialmente estamos tomanod en cuenta que n1 y n2 esta dentro del arbol
    Tambien que es un arbol donde left < a root y rigth es > a root
    Estamos BUSCANDO el nodo que este entre ambos, ese es el least!
        Si n1 y n2 son mayores a root entonces tu lca esta en la derecha
        si n1 y n2 son menores a root entonces tu lca esta a la izquierda.
        si esta entre n1 y n2 ya lo lograste! es el LEAST.
*/

function lca(root, n1, n2){
    if(root === null){
        return null;
    }
    if(root.value > n1 && root.value > n2){
        return lca(root.left,n1,n2);
    }else if(root.value < n1 && root.value < n2){
        return lca(root.right,n1,n2);
    }
    return root;
}

function lca_iterative(root, n1, n2){
    console.log("root", root.value)
    while(root !== null){
        if(root.value > n1 && root.value > n2 ){
            root = root.left
        }else if( root.value < n1 && root.value < n2  ){
            root = root.right
        } else{
            break;
        }
    }

    return root;
}

function construct(){
    //var arr = [1, 2, 4, 5, 3, 6, 7];
    var arr = [20,8,4,12,10,14,22];
    while(arr.length > 0){
        myBst.add(arr.shift());
    }
    return;
}

function main(){
    construct();
    console.log("BST", myBst)
    var a = lca(myBst.root, 10, 14); //12
    //var a = lca(myBst.root, 14, 8); //8
    //var a = lca(myBst.root, 10, 22); //20
    console.log("Regrese: ", a.value);
}

main();
