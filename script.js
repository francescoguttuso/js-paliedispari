function isPalindroma(parola) {
    //trasformo la Prima lettera se scritta maiuscola in minuscola
    const parolaMinuscola = parola.toLowerCase();
    //con split divido la parola in lettere,con reverse la inverto, con join la trasforma in "parola"
    const parolaRibaltata = parolaMinuscola.split("").reverse().join("");
    //se le due parole coincidono allora true
    return parolaMinuscola === parolaRibaltata;

}
let parola = prompt("Inserisci una parola");
if (parola) {
    console.log(`É Palindroma: ${isPalindroma(parola)}`);
}




const userNumber = 3;

if (userNumber < 1 || userNumber > 5) {
    console.error("Non è un numero valido");
} else {
    console.log("Numero accettato!");
}

function isEvenOrOdd(number) {
    number = Math.floor(Math.random() * 6) + 1;
    return;
}
console.log(isEvenOrOdd);

function somma(a, b) {
    const sommaNumber = a + b;
    return sommaNumber;
}