let visor = document.getElementById("visor_calculadora__calculo");
let resultado = 0;
//Iniciando variable de los botones

function agregarvisorop(carac){
    if(visor.innerHTML.trim()=== '0'){
        visor.innerHTML = 0
    } else {
    visor.innerHTML = visor.innerHTML + carac;
    resultado = 0
    }
}

function agregarvisor(carac){
    if(visor.innerHTML.trim()=== '0' || (resultado !== 0)){
        visor.innerHTML = carac
        resultado = 0
    } else {
    visor.innerHTML = visor.innerHTML + carac;
    }
}

function borrar(){
    visor.innerHTML = '0'
}

console.log(visor.innerHTML)


function calcular(){
    resultado = eval(visor.innerHTML);
    visor.innerHTML = resultado
}