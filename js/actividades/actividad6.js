let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));

if (numero1 > numero2) {
    document.write("el numero 1 es mayor que el numero 2. Numero 1: " + numero1);
} else if (numero1 == numero2) {
    document.write("Los numero son iguales. Numero 1: " + numero1 + ", Numero 2: " + numero2);
} else {

    document.write("el numero 2 es mayor que el numero 1. Numero 2: " + numero2);
}