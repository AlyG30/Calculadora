
// Calculadora de operaciones en JavaScript
const PI = 3.1416;
let valor1 = 5;
let valor2 = 3;

// Operaciones
let resultadoSuma = valor1 + valor2;                // suma
let resultadoResta = valor1 - valor2;               // resta
let resultadoMultiplicacion = valor1 * valor2;      // multiplicación
let resultadoDivision = valor1 / valor2;            // división
// Potencia: (valor1^valor2)
let resultadoPotencia = Math.pow(valor1, valor2);
// Módulo
let resultadoModulo = valor1 % valor2;

// Mostrar resultados en consola
console.log("PI = " + PI);
console.log(`Valor 1 = ${valor1}, Valor 2 = ${valor2}`);
console.log("El resultado de la suma es: " + resultadoSuma);
console.log("El resultado de la resta es: " + resultadoResta);
console.log("El resultado de la multiplicación es: " + resultadoMultiplicacion);
console.log("El resultado de la división es: " + resultadoDivision);
console.log("El resultado de la potencia (v1^v2) es: " + resultadoPotencia);
console.log("El resultado del módulo (v1%v2) es: " + resultadoModulo);

