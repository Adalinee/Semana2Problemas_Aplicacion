// SECCIÓN 1
// 1. Programa para determinar si un usuario es mayor de edad
function verificarEdad() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    if (edad >= 18) {
        console.log("Eres mayor de edad.");
    } else {
        console.log("No eres mayor de edad.");
    }
}
verificarEdad();

//2. Productos con IVA
//Con condicionales
function verificarIVA() {
    let producto = prompt("Ingrese el nombre del producto (lentejas, crema, arroz, vino):").toLowerCase();
    if (producto === "lentejas" || producto === "arroz") {
        console.log("El producto no paga IVA.");
    } else if (producto === "vino" || producto === "crema") {
        console.log("El producto paga IVA.");
    } else {
        console.log("Producto no válido.");
    }
}
verificarIVA();

//Mismo problema con Switch
function verificarIVASwitch() {
    let producto = prompt("Ingrese el nombre del producto (lentejas, crema, arroz, vino):").toLowerCase();
    switch (producto) {
        case "lentejas":
        case "arroz":
            console.log("El producto no paga IVA.");
            break;
        case "vino":
        case "crema":
            console.log("El producto paga IVA.");
            break;
        default:
            console.log("Producto no válido.");
    }
}
verificarIVASwitch();

//3. Comparar dos números
function compararNumeros() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    if (num1 > num2) {
        console.log("El número mayor es:", num1);
    } else if (num1 < num2) {
        console.log("El número mayor es:", num2);
    } else {
        console.log("Ambos números son iguales.");
    }
}
compararNumeros();

//4. Verificar si los ángulos corresponden a un triángulo
function verificarTriangulo() {
    let angulo1 = parseInt(prompt("Ingrese el primer ángulo:"));
    let angulo2 = parseInt(prompt("Ingrese el segundo ángulo:"));
    let angulo3 = parseInt(prompt("Ingrese el tercer ángulo:"));
    if (angulo1 + angulo2 + angulo3 === 180) {
        console.log("Los ángulos forman un triángulo.");
    } else {
        console.log("Los ángulos no forman un triángulo.");
    }
}
verificarTriangulo();

//Mismo problema con switch 
function verificarTrianguloSwitch() {
    var angulo1 = parseInt(prompt("Ingrese el primer ángulo:"));
    var angulo2 = parseInt(prompt("Ingrese el segundo ángulo:"));
    var angulo3 = parseInt(prompt("Ingrese el tercer ángulo:"));
    switch (true) {
        case angulo1 + angulo2 + angulo3 === 180:
            console.log("Los ángulos forman un triángulo.");
            break;
        default:
            console.log("Los ángulos no forman un triángulo.");
    }
}
verificarTrianguloSwitch();

//5. Verificar si un número es par o impar
function verificarParidad() {
    let numero = parseInt(prompt("Ingrese un número:"));
    if (numero % 2 === 0) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
}
verificarParidad();

//6. Verificar si un número es divisible entre cinco
function verificarDivisiblePorCinco() {
    let numero = parseInt(prompt("Ingrese un número:"));
    if (numero % 5 === 0) {
        console.log("El número es divisible entre cinco.");
    } else {
        console.log("El número no es divisible entre cinco.");
    }
}
verificarDivisiblePorCinco();

//7. Verificar si un número entre 1 y 15 es primo
function verificarNumeroPrimo() {
    var numero = parseInt(prompt("Ingrese un número entre 1 y 15:"));
    switch (true) {
        case numero < 1 || numero > 15:
            console.log("El número está fuera del rango permitido.");
            break;
        case esPrimo(numero):
            console.log("El número es primo.");
            break;
        default:
            console.log("El número no es primo.");
    }
}
verificarNumeroPrimo();










