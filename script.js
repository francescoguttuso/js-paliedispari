function isPalindroma (parola) {
    const parolaMinuscola = parola.toLowerCase();
    const parolaRibaltata = parolaMinuscola.split("").reverse().join("");
    parolaMinuscola = parolaRibaltata;  
}