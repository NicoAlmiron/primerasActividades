let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));
let numero3 = parseInt(prompt("Ingrese un tercer numero"));

if ((numero1 == numero2) && (numero1 == numero3)) {
    document.write("los tres numeros son iguales <br> Nº 1: " + numero1 + "<br> Nº 2: " + numero2 + "<br> Nº 3: " + numero3);
} else if ((numero1 == numero2) && (numero1 > numero3)) {
    document.write("los numeros 1 y 2 son iguales y mayores al numero 3 <br> Nº 1: " + numero1 + "<br> Nº 2: " + numero2 + "<br> Nº 3: " + numero3);
} else if ((numero1 > numero2) && (numero1 == numero3)) {
    document.write("los numeros 1 y 3 son iguales y mayores al numero 2 <br> Nº 1: " + numero1 + "<br> Nº 2: " + numero2 + "<br> Nº 3: " + numero3);
} else if ((numero3 == numero2) && (numero2 > numero1)) {
    document.write("los numeros 2 y 3 son iguales y mayores al numero 1 <br> Nº 1: " + numero1 + " <br> Nº 2: " + numero2 + " <br> Nº 3: " + numero3);
} else if ((numero1 > numero2) && (numero1 > numero3)) {
    document.write("El Numero 1 es el mayor de los tres <br> Nº 1: " + numero1 + " <br> Nº 2: " + numero2 + " <br> Nº 3: " + numero3);
} else if ((numero2 > numero1) && (numero2 > numero3)) {
    document.write("El Numero 2 es el mayor de los tres <br> Nº 1: " + numero1 + " <br> Nº 2: " + numero2 + " <br> Nº 3: " + numero3);
} else if ((numero3 > numero1) && (numero3 > numero2)) {
    document.write("El Numero 3 es el mayor de los tres <br> Nº 1: " + numero1 + " <br> Nº 2: " + numero2 + " <br> Nº 3: " + numero3);
}