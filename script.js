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

//---esercizio Pari o Dispari---
//chiedo all'utente di inserire un numero da 1 a 5

const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

if (userNumber < 1 || userNumber > 5) {
    alert("Non è un numero valido");
} else {
    console.log("Numero accettato!");
}
//---creo la funzione che genera un numero da 1 a 5 e dice se è pari o dispari---
function isEvenOrOdd(number) {
    number = Math.floor(Math.random() * 6) + 1;
    return number % 2 === 0 ? "pari" : "dispari";
}


function somma(a, b) {
    const sommaNumber = a + b;
    return sommaNumber;
}


const risultato = somma(userNumber, isEvenOrOdd);
if (risultato % 2 === 0) {
    console.log("Hai vinto! Il risultato è pari");
} else {
    console.log("Hai perso! Il risultato è dispari");
}

