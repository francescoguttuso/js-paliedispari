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

const userChoice = prompt("Scegli pari o dispari").toLowerCase();
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

if (userNumber < 1 || userNumber > 5) {
    alert("Non è un numero valido");
} else {
    console.log("Numero accettato!");
}
//---creo la funzione che genera un numero da 1 a 5 ---
function randomNumber(number) {
    number = Math.floor(Math.random() * 6) + 1;

}

function isPari(totale) {
    // ritorna "pari" o "dispari"
    if (totale % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}


function somma(a, b) {
    const sommaNumber = a + b;
    return sommaNumber;
}


const risultato = somma(userNumber, randomNumber());
if (isPari(risultato) === userChoice) {
    console.log("Hai vinto! Il risultato è " + isPari(risultato));
} else {
    console.log("Hai perso! Il risultato è dispari");

}

