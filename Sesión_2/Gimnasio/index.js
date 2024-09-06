/* Respuestas parte 1
1- B
2- D
3- B
4- A
*/

// PArte 2

function suma(num1,num2){
    return num1+num2;
}

function parimpar(num1){
    if(num1%2==0){
        return true
    }
    else{
        return false
    }
}
function mayuscula(word){
    palabra = word.toUpperCase();
    return palabra;
}

function promedio(n1,n2,n3){
    return (n1+n2+n3)/3;
}

console.log(`probando 1 ${suma(2,3)}
            probando 2 ${parimpar(7)}
            probando 3 ${mayuscula("colo-colo")}
            probando 4 ${promedio(10,15,30)}`);
