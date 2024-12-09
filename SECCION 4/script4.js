//1. Número primo
function esPrimo(numero) {
    if (numero < 2) return false;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }

    return true;
}

let numero = parseInt(prompt("Ingrese un número entero positivo (≤ 1,000,000,000):"));
console.log("¿Es primo?: " + esPrimo(numero));

//2. Número reversible
function esReversible(num) {
    let invertido = parseInt(num.toString().split("").reverse().join(""));
    let suma = num + invertido;
    let esImpar = true;

    while (suma > 0) {
        if ((suma % 10) % 2 === 0) {
            esImpar = false;
            break;
        }
        suma = Math.floor(suma / 10);
    }

    return esImpar;
}

let num = parseInt(prompt("Ingrese un número entre 0 y 999:"));
console.log("¿Es reversible?: " + esReversible(num));


//3. Cantidad de ocurrencias del dígito más repetido
function digitoMasRepetido(numero1) {
    let conteo = new Array(10).fill(0);

    while (numero1 > 0) {
        let digito = numero1 % 10;
        conteo[digito]++;
        numero1 = Math.floor(numero1 / 10);
    }

    return Math.max.apply(null, conteo);
}

let numero1 = parseInt(prompt("Ingrese un número entero no negativo:"));
console.log("El dígito más repetido ocurre: " + digitoMasRepetido(numero1) + " veces.");

//4. Posibles números pares combinando tres dígitos
function numerosParesCombinados(d1, d2, d3) {
    let combinaciones = [];
    let digitos = [d1, d2, d3];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                if (i !== j && j !== k && i !== k) {
                    let numero = parseInt(digitos[i] + "" + digitos[j] + "" + digitos[k]);
                    if (numero % 2 === 0) combinaciones.push(numero);
                }
            }
        }
    }

    console.log("Números pares posibles: " + combinaciones.join(", "));
}

numerosParesCombinados(1, 2, 3); 

//5. Serie dada 
function calcularSerie(n) {
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += i / (i + 1);
    }

    console.log("Resultado de la serie: " + suma.toFixed(2));
}

let n = parseInt(prompt("Ingrese un número entero positivo (n):"));
calcularSerie(n);


//6. Cociente mediante restas sucesivas
function calcularCociente(dividendo, divisor) {
    let cociente = 0;

    while (dividendo >= divisor) {
        dividendo -= divisor;
        cociente++;
    }

    console.log("Cociente: " + cociente);
}

let dividendo = parseInt(prompt("Ingrese el dividendo:"));
let divisor = parseInt(prompt("Ingrese el divisor:"));
calcularCociente(dividendo, divisor);

// Potencia de ab
function calcularPotencia(base, exponente) {
    let potencia = 1;

    for (let i = 0; i < exponente; i++) {
        potencia *= base;
    }

    console.log(base + "^" + exponente + " = " + potencia);
}

let base = parseInt(prompt("Ingrese la base:"));
let exponente = parseInt(prompt("Ingrese el exponente:"));
calcularPotencia(base, exponente);

//8. Generar la serie: -2, 6, -8, 12, ...
function generarSerie(z) {
    let resultado = "";
    let valor = -2;

    for (let i = 1; i <= z; i++) {
        resultado += valor + (i === z ? "" : ", ");
        valor = (i % 2 === 0) ? valor + 4 : valor - 6;
    }

    console.log("Serie: " + resultado);
}

let z = parseInt(prompt("Ingrese la cantidad de términos de la serie:"));
generarSerie(n);

//9. Descomponer en factores primos

function descomponerFactoresPrimos(numero2) {
    let resultado = "";
    let divisor = 2;

    while (numero2 > 1) {
        while (numero2 % divisor === 0) {
            resultado += divisor + " ";
            numero2 /= divisor;
        }
        divisor++;
    }

    console.log("Factores primos: " + resultado.trim());
}

let numero2 = parseInt(prompt("Ingrese un número entero positivo:"));
descomponerFactoresPrimos(numero2);

//10. Determinar si un número es perfecto

function esPerfecto(numero3) {
    let suma = 0;

    for (let i = 1; i < numero3; i++) {
        if (numero3 % i === 0) {
            suma += i;
        }
    }

    console.log("¿Es perfecto?: " + (suma === numero3));
}

let numero3 = parseInt(prompt("Ingrese un número entero positivo:"));
esPerfecto(numero3);

//11. Calcular el MCD (Máximo Común Divisor)
function calcularMCD(a, b) {
    while (b !== 0) {
        let residuo = a % b;
        a = b;
        b = residuo;
    }

    console.log("MCD: " + a);
}

let a = parseInt(prompt("Ingrese el primer número:"));
let b = parseInt(prompt("Ingrese el segundo número:"));
calcularMCD(a, b);

//12. Calcular el mcm (Mínimo Común Múltiplo)
function calcularMCM(j, k) {
    let mcm = (j * k) / calcularMCDInterno(j, k);
    console.log("MCM: " + mcm);
}

function calcularMCDInterno(j, k) {
    while (k !== 0) {
        let residuo = j % k;
        j = k;
        k = residuo;
    }
    return j;
}

let j = parseInt(prompt("Ingrese el primer número:"));
let k = parseInt(prompt("Ingrese el segundo número:"));
calcularMCM(j, k);

//13. Generar triángulo de 
function generarTriangulo(y) {
    let resultado = "";

    for (let i = 1; i <= y; i++) {
        for (let j = 1; j <= i; j++) {
            resultado += "*";
        }
        resultado += "\y";
    }

    console.log("Triángulo:\y" + resultado);
}

let y = parseInt(prompt("Ingrese el tamaño del triángulo (n):"));
generarTriangulo(y);

//14. Determinar si dos números son amigos
function sonAmigos(p, q) {
    function sumaDivisores(n) {
        let suma = 0;
        for (let i = 1; i < n; i++) {
            if (n % i === 0) suma += i;
        }
        return suma;
    }

    console.log("¿Son amigos?: " + (sumaDivisores(p) === q && sumaDivisores(q) === p));
}

let p = parseInt(prompt("Ingrese el primer número:"));
let q = parseInt(prompt("Ingrese el segundo número:"));
sonAmigos(p, q);















