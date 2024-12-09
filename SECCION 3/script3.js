// Generar una cadena de ADN con una única base
function generarCadenaUnaBase() {
    let base = prompt("Ingrese la base (A, T, C, G):").toUpperCase();
    let longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));
    let cadena = "";

    for (let i = 0; i < longitud; i++) {
        cadena += base;
    }

    console.log("Cadena generada: " + cadena);
}
generarCadenaUnaBase();

//1. Cadena con dos bases seleccionadas aleatoriamente

function generarCadenaDosBases() {
    let bases = ["A", "T", "C", "G"];
    let base1 = bases[Math.floor(Math.random() * 4)];
    let base2 = bases[Math.floor(Math.random() * 4)];
    let longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));
    let cadena = "";

    for (let i = 0; i < longitud; i++) {
        cadena += Math.random() < 0.5 ? base1 : base2;
    }

    console.log("Base 1: " + base1 + ", Base 2: " + base2);
    console.log("Cadena generada: " + cadena);
}
generarCadenaDosBases();

// 2. Cadena con condiciones específicas y longitud múltiplo de 10

function generarCadenaCondiciones() {
    let longitud = 0;

    do {
        longitud = parseInt(prompt("Ingrese una longitud múltiplo de 10:"));
        if (longitud % 10 !== 0) {
            console.log("La longitud debe ser múltiplo de 10.");
        }
    } while (longitud % 10 !== 0);

    let cantidadG = longitud / 10;
    let cantidadC = cantidadG * 4;
    let cantidadT = cantidadG * 2;
    let cantidadA = cantidadG * 3;

    let cadena = "G".repeat(cantidadG) + "C".repeat(cantidadC) + "T".repeat(cantidadT) + "A".repeat(cantidadA);
    console.log("Cadena generada: " + cadena);
}
generarCadenaCondiciones();

//3. Cadena con dos bases y un porcentaje

function generarCadenaConPorcentaje() {
    let base1 = prompt("Ingrese la primera base (A, T, C, G):").toUpperCase();
    let base2 = prompt("Ingrese la segunda base (A, T, C, G):").toUpperCase();
    let porcentaje = -1;

    do {
        porcentaje = parseInt(prompt("Ingrese el porcentaje para la primera base (1 a 99):"));
        if (porcentaje < 1 || porcentaje > 99) {
            console.log("El porcentaje debe estar entre 1 y 99.");
        }
    } while (porcentaje < 1 || porcentaje > 99);

    let longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));
    let cantidadBase1 = Math.round((porcentaje / 100) * longitud);
    let cantidadBase2 = longitud - cantidadBase1;

    let cadena = base1.repeat(cantidadBase1) + base2.repeat(cantidadBase2);
    console.log("Cadena generada: " + cadena);
}
generarCadenaConPorcentaje();

//4. Primera posición de una subcadena dentro de otra
function buscarPrimeraPosicion() {
    let cadenaPrincipal = prompt("Ingrese la cadena principal:");
    let subcadena = prompt("Ingrese la subcadena:");

    let posicion = -1;
    for (let i = 0; i <= cadenaPrincipal.length - subcadena.length; i++) {
        let coincide = true;
        for (let j = 0; j < subcadena.length; j++) {
            if (cadenaPrincipal[i + j] !== subcadena[j]) {
                coincide = false;
                break;
            }
        }
        if (coincide) {
            posicion = i;
            break;
        }
    }

    console.log("Primera posición: " + posicion);
}
buscarPrimeraPosicion();

//5. Número de veces que una subcadena aparece dentro de otra
function contarAparicionesSubcadena() {
    let cadenaPrincipal = prompt("Ingrese la cadena principal:");
    let subcadena = prompt("Ingrese la subcadena:");
    let contador = 0;

    for (let i = 0; i <= cadenaPrincipal.length - subcadena.length; i++) {
        let coincide = true;
        for (let j = 0; j < subcadena.length; j++) {
            if (cadenaPrincipal[i + j] !== subcadena[j]) {
                coincide = false;
                break;
            }
        }
        if (coincide) {
            contador++;
        }
    }

    console.log("Apariciones: " + contador);
}
contarAparicionesSubcadena();


//6. Mostrar frecuencia de bases consecutivas en una cadena
function frecuenciaBases() {
    let cadena = "AAAGTCCAGGTTTT"; 
    let resultado = "";
    let contador = 1;

    for (let i = 1; i <= cadena.length; i++) {
        if (cadena[i] === cadena[i - 1]) {
            contador++;
        } else {
            resultado += cadena[i - 1] + contador + ",";
            contador = 1;
        }
    }

    console.log("Frecuencia de bases: " + resultado.slice(0, -1));
}
frecuenciaBases();














