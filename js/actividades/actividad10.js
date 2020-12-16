let numero1 = parseInt(prompt("Ingrese un numero"));

if ((numero1 % 2) == 0) {
    document.write("El numero ingresado es divisible por 2");
} else if ((numero1 % 3) == 0) {
    document.write("El numero ingresado es divisible por 3");
} else if ((numero1 % 5) == 0) {
    document.write("El numero ingresado es divisible por 5");
} else if ((numero1 % 7) == 0) {
    document.write("El numero ingresado es divisible por 7");
}