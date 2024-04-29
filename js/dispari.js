// chiedo se sciegliere pari o dispari
let pariODispari = prompt('inserisci pari o dispari')
// chiedo il numero all utente
let numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'))

console.log(numeroUtente)

// creo una funzione che genera un numero casuale da 1 a 5
function numeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
}
// creo una variabile e gli assegno il valore della funzione numeroRandom
let numeroPc = numeroRandom();

console.log(numeroPc)
// creo una variabile vuota in modo che esista anche fuori dallo scoop
let esito = '';
// faccio la somma del numero del pc e quello inserito dall utente
let somma = numeroUtente + numeroPc
// stampo in pagina tutti i numeri e la loro somma
document.querySelector('h3').innerHTML = `Il tuo numero: ${numeroUtente}; il numero generato dal pc: ${numeroPc}; la somma: ${somma}.`
// controllo se il numero sommato sia pari o dispari
if (somma % 2 == 0) {
    esito = 'pari'
} else {
    esito = 'dispari'
}
// se l'esito del controllo corrisponde a quello inserito dall utente stampo la somma e il relativo esito.
if (esito == pariODispari) {
    document.querySelector('h1').innerHTML = `Il numero uscito: ${somma} è ${esito} bravo!`
    console.log('ci hai preso!')
} else { //se non corrisponde stampo la somma e l'esito e invito l'utente a riprovare
    document.querySelector('h1').innerHTML = `Il numero uscito: ${somma} è ${esito} riprova!`
    console.log('mi dispiace riprova!')
}