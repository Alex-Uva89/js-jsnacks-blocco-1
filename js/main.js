// SNACK 1 

const resultStamp = document.querySelector('.snack');

/*const num1 = parseInt(prompt('Numero 1:'));
const num2 = parseInt(prompt('Numero 2:'));

if (num1 > num2){
    console.log('num1')
} else if (num1 < num2){
    console.log('num2')
} else {
    console.log('Sono uguali')
}*/

// SNAK 2

/*const word1 = prompt('Parola 1');
const word2 = prompt('Parola 2');

if (word1.length > word2.length){
    resultStamp.innerHTML=word1 + ' è più lunga di ' + word2;
} else if (word1.length < word2.length){
    resultStamp.innerHTML=word2 + ' è più lunga di ' + word1;

} else {
    resultStamp.innerHTML= word1 + ' e ' +  word2 + ' sono lunghe uguali'
}*/

// SNACK 3

/*const num1st = parseInt(prompt('Indicami 1° numero'));
const num2nd = parseInt(prompt('Indicami 2° numero'));
const num3th = parseInt(prompt('Indicami 3° numero'));
const num4th = parseInt(prompt('Indicami 4° numero'));
const num5th = parseInt(prompt('Indicami 5° numero'));
const num6th = parseInt(prompt('Indicami 6° numero'));
const num7th = parseInt(prompt('Indicami 7° numero'));
const num8th = parseInt(prompt('Indicami 8° numero'));
const num9th = parseInt(prompt('Indicami 9° numero'));
const num10th = parseInt(prompt('Indicami 10° numero'));

resultStamp.innerHTML=Math.floor(num10th + num1st + num2nd + num3th + num4th + num5th + num6th + num7th + num8th + num9th);*/

/*
let calcArray = [];

for (let calc = 0; calc < 10; calc++){
    let numUser = parseInt(prompt('Indicami un numero'));
    calcArray.push(numUser);
}

let summ = 0;

for (let i = 0; i < calcArray.length; i++) {
    summ += calcArray[i];
}

resultStamp.innerHTML = summ;
*/

// Snack 4
// In un array sono contenuti i nomi degli invitati alla festa del grande
// Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
// no alla festa.

/*
const InvitedArray = [ 'Gianni', 'Lady Gaga','Pinotto','Sergio','Calogero']

let nameUser = prompt('Qual è il tuo nome?');

let convalid = false;

for (let controlList = 0; controlList < InvitedArray.length; controlList++) {
    if (nameUser.toLowerCase === InvitedArray[controlList].toLowerCase){
        convalid = true;
    } 
}

if (convalid) {
    resultStamp.innerHTML= 'Benvenuto alla festa'
} else {
    resultStamp.innerHTML= 'Non pupi partecipare alla festa'
}
*/


// Snack 5
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

/*
let calcArray = [];

for (let calc = 0; calc < 6; calc++){
    let numUser = parseInt(prompt('Indicami un numero'));
    if (numUser % 2 == 1){
        calcArray.push(numUser);
    }
}

resultStamp.innerHTML= (calcArray);
*/


// Snack 6
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

/*
let numUser = (prompt('Indicami un numero di quattro cifre'));
let numberArray = [];
let summ = 0;

if (numUser.length > 4){
    alert('Indica SOLO 4 cifre');
} else if (numUser.length < 4){
    alert('Indica SOLO 4 cifre');
} else {
        numberArray = [...numUser]
        for (let calc = 0; calc < numberArray.length; calc++) {
             summ += parseInt(numUser[calc]);
        }
}
    
    resultStamp.innerHTML = 'La somma dei 4 numeri è ' + summ;
*/


// :::::::::::::::SNACK 1.9
/*
Calcola la somma e la media dei primi 10 numeri.


let somma = 0;

for (let numero = 1; numero <= 10; numero++){
    somma += numero;
    console.log(numero);
}

let media = somma / 10;

console.log(somma);
console.log(media);


*/

/*
 Snack 2.1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

// chiedo 5 volte un numero
// mi serve la somma dei numeri inseriti
/*
SOLUZIONE CICLO FOR:


let somma = 0;

for (let numero = 1; numero <= 5; numero++) {
    let numeroUser = parseInt(prompt('Inserici un numero'));
    somma += numeroUser; 
}
resultStamp.innerHTML = "la somma dei tuoi numeri è " + somma;
*/

// SOLUZIONE CICLO while:
/*
let somma = 0;

while (somma < 5){
    numeroUser = parseInt(prompt('Inserisci un numero'));
    somma += numeroUser ;
}

resultStamp.innerHTML = 'il tuo risultato è ' + somma;
*/


/*
Snack 2.2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

// inserisco un numero
// definisco la condizione pari
// è pari: stampa il numero pari
// è dispari: stampa il numero pari successivo
/*
let numero = parseInt(prompt('inserisci un numero'));

if (numero% 2 == 0) {
    resultStamp.innerHTML = numero + ' è pari!';
} else {
    numero++
    resultStamp.innerHTML = numero + ' è il numero pari successivo';
}
*/

/*
Snack 2.3
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

// ho una lista di nomi creati da me

// ho una lista di cognomi creati da me

// ho una lista di invitati vuota
// genero una lista di invitati selezionando nomi e cognomi dalle liste precedenti

let listaNomi = [ 'Alessandro', 'Mauro', 'Gabriele', 'Henri', 'Chiara', 'Mirko', 'Paolo', 'Laura', 'Erika', 'Luigi'];
let listaCognomi = ['Uva', 'Fragola', 'Albicocca', 'Pera', 'Mela', 'Banana', 'Pesca', 'Ciliegia', 'Soffritto'];

let listaInvitati = [];
while (listaInvitati <= 3 ) {
    let nomiInvitati = Math.floor(Math.random()*listaNomi.length);
    let cognomiInvitati = Math.floor(Math.random()*listaCognomi.length);
    listaInvitati += cognomiInvitati , nomiInvitati;
}

resultStamp.innerHTML = 'La tua lista è composta da: ' + listaInvitati;

