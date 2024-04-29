let parola = prompt('inserisci una parola wow')
let verifica = '';

// creo la funzione per rigirare la parola al contrario
function polindroma(parola) {
    console.log('sono nella funzione')

    for (let i = (parola.length - 1); i >= 0; i--) {
        const lettera = parola[i];
        console.log(lettera)
        verifica += lettera;
        console.log(verifica, parola)

    }
    return verifica

}
// faccio partire la funzione con la parola scelta dall utente da verificare
verifica = polindroma(parola);

// Verifico se la parola scritta sia polindroma
if (parola == verifica) {
    document.querySelector('h1').innerHTML = "la tua parola: " + parola + " e polindroma"
    console.log('polindorma')
} else {
    document.querySelector('h1').innerHTML = "la tua parola: " + parola + " NON e polindorma"
    console.log('NON polindorma')
}