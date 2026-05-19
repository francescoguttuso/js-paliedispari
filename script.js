function isPalindrome(parola) {
    const length = parola.length;

    // controlla la metà della stringa confrontando i caratteri speculari
    for (let i = 0; i < length / 2; i++) {
        if (parola[i] !== parola[length - 1 - i]) {
            return false; //  non è un palindromo
        }
    }
    return true; // Tutti i caratteri corrispondono
}

let parola = prompt("Inserisci una parola");
if (parola) {
    console.log(`É Palindroma: ${isPalindrome(parola)}`);
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
    number = Math.floor(Math.random() * 5) + 1;

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
    console.log("Hai perso! Il risultato è " + isPari(risultato));

}

