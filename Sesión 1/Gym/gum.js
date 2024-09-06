// Ejercicio 1
//Inicio de variables
let num1 = parseInt(prompt("Escribe un número cualquiera"));
let num2 = parseInt(prompt("Escribe un número cualquiera"));

//Se realizan los cálculos y luego se muestran en consola
console.log(`La suma de los números es ${num1+num2}
    La resta entre los números es ${num1-num2}
    El producto entre los números es ${num1*num2}
    La división entre los números es ${num1/num2}
    El resto de la división es ${num1%num2}`);


//Ejercicio 2
//Se solicita temperatura en grados Celcius
let tempCelsius = parseInt(prompt("Ingresa la temperatura en grados Celcius"));

// Conversicón a Kelvin y Fahrenheit
let tempKelvin = tempCelsius+273.15;
let tempFahrenheit = tempCelsius*9/5+32;
//Se imprime el resultado en pantalla
console.log(`La temperatura en grados kelvin es ${tempKelvin}, mientras que en grados Fahrenheit es ${tempFahrenheit}`);


//Ejercicio 3
//Se solicita el ingreso de la cantidad de dias
let cantidadDias = parseInt(prompt("Ingresa una cantidad de dias"));
//Se imprime el resultado en pantalla
console.log(`La cantidad de años es ${Math.floor(cantidadDias/365)}, y la cantidad de semanas es ${Math.floor(cantidadDias/7)}`);

//Ejercicio 4
//Se crea un arreglo donde ira cada uno de los números
let numeros = []
//Se itera el proceso de ingresar números
for(let i=0; i<=4; i++){
    numeros[i] = parseInt(prompt("Ingresa un número"));
};
//Se define la variable suma
let suma = 0 ;
// Se van sumando uno a uno los valores
for(let i=0;i<=4;i++){
    suma = numeros[i]+suma
};
// Usando la suma se define el promedio dado que la cantidad de número es conocido
let promedio = suma/5;
//Se imprime el resultado en pantalla
console.log(`La suma de los números es ${suma}, mientras que el promedio es ${promedio}`);
