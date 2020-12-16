let frase = prompt("Escriba una frase");

let x = frase.length;

let i;

var vocales = 0;

for (i = 0; i < x; i++) {

    if ((frase.substr(i, 1) == "a") ||
        (frase.substr(i, 1) == "e") ||
        (frase.substr(i, 1) == "i") ||
        (frase.substr(i, 1) == "o") ||
        (frase.substr(i, 1) == "u")) {
        vocales = vocales + 1;
    }
}

document.write("En esta frace existen " + vocales + " Vocales");