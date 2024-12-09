//1. Bucle for que imprima los números del 1 al 20
function imprimirNumerosFor() {
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
}
imprimirNumerosFor();

//2. Bucle while que imprima los números del -100 al 600
function imprimirNumerosWhile() {
    let i = -100;
    while (i <= 600) {
        console.log(i);
        i++;
    }
}
imprimirNumerosWhile();

//3. Tabla de multiplicar del 3 (0 al 50)
function tablaMultiplicarTres() {
    for (let i = 0; i <= 50; i++) {
        console.log("3 x " + i + " = " + (3 * i));
    }
}
tablaMultiplicarTres();

//4. Promedio de tres notas para n estudiantes
function calcularPromedio() {
    let n = parseInt(prompt("Ingrese la cantidad de estudiantes:"));
    for (let i = 1; i <= n; i++) {
        let nota1 = parseFloat(prompt("Ingrese la nota 1 del estudiante " + i + ":"));
        let nota2 = parseFloat(prompt("Ingrese la nota 2 del estudiante " + i + ":"));
        let nota3 = parseFloat(prompt("Ingrese la nota 3 del estudiante " + i + ":"));
        let promedio = (nota1 + nota2 + nota3) / 3;
        console.log("El promedio del estudiante " + i + " es: " + promedio.toFixed(2));
    }
}
calcularPromedio();

//5. Números naturales de 1 a n
function numerosNaturales() {
    let n = parseInt(prompt("Ingrese el valor de n:"));
    let i = 1;
    while (i <= n) {
        console.log(i);
        i++;
    }
}
numerosNaturales();

//6. Suma de los primeros n números naturales
function sumaNumerosNaturales() {
    let n = parseInt(prompt("Ingrese el valor de n:"));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    console.log("La suma de los primeros " + n + " números naturales es: " + suma);
}
sumaNumerosNaturales();

//7. Tabla de multiplicar del 10 (del 1 al 50)
function tablaMultiplicarDiez() {
    for (let i = 1; i <= 50; i++) {
        console.log("10 x " + i + " = " + (10 * i));
    }
}
tablaMultiplicarDiez();

//8. Mostrar números impares entre 1 y n
function numerosImpares() {
    let n = parseInt(prompt("Ingrese el valor de n:"));
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
numerosImpares();

//9. Preguntar al usuario si desea salir
function preguntarSalir() {
    let respuesta = "";
    while (respuesta !== "S") {
        respuesta = prompt("¿Desea salir? (S/N)").toUpperCase();
        if (respuesta === "N") {
            console.log("Continuando...");
        } else if (respuesta !== "S") {
            console.log("Respuesta no válida.");
        }
    }
    console.log("Programa terminado.");
}
preguntarSalir();

// 10. Calcular el promedio de 10 números
function promedioDiezNumeros() {
    let suma = 0;
    for (let i = 1; i <= 10; i++) {
        let numero = parseFloat(prompt("Ingrese el número " + i + ":"));
        suma += numero;
    }
    let promedio = suma / 10;
    console.log("El promedio de los 10 números es: " + promedio.toFixed(2));
}
promedioDiezNumeros();

//11. Promedio de n números, deteniéndose cuando se introduce el 0
function promedioNumerosHastaCero() {
    let suma = 0;
    let contador = 0;
    let numero = -1;

    while (numero !== 0) {
        numero = parseFloat(prompt("Ingrese un número (0 para terminar):"));
        if (numero !== 0) {
            suma += numero;
            contador++;
        }
    }

    if (contador > 0) {
        let promedio = suma / contador;
        console.log("El promedio de los números ingresados es: " + promedio.toFixed(2));
    } else {
        console.log("No se ingresaron números.");
    }
}
promedioNumerosHastaCero();

//12. Suma de los cuadrados de los números entre 1 y n
function sumaCuadradosHastaN() {
    let n = parseInt(prompt("Ingrese el valor de n:"));
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += i * i;
    }

    console.log("La suma de los cuadrados de los números de 1 a " + n + " es: " + suma);
}
sumaCuadradosHastaN();












