function isPalindroma (parola) {
    //trasformo la Prima lettera se scritta maiuscola in minuscola
    const parolaMinuscola = parola.toLowerCase();
    //con split divido la parola in lettere,con reverse la inverto, con join la trasforma in "parola"
    const parolaRibaltata = parolaMinuscola.split("").reverse().join("");
    //se le due parole coincidono allora true
     return parolaMinuscola === parolaRibaltata; 
     
}
console.log (isPalindroma ("Casa"));

