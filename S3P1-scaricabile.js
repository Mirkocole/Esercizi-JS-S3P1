/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/


/* 

function crazySum(x,y){
    if (typeof x === 'number' && typeof y === 'number') {
        if (x === y) {
            return (x+y)*3;
        } else {
            return x+y;
        }
    } else {
        console.log('La funzione richiede due numeri');
        return;
    }
}

*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/



/* 

function boundary(num){
    if (typeof num === 'number') {
        if ((num > 20 && num <= 100) || num === 400) {
            return true;
        } else {
            return false;
        }
    } else {
        console.log('La funzione richiede un numero');
        return;
    }
}


*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/


/*

function reverseString(randomString){
    if (typeof randomString === 'string') {

        let newString = '';
        for (let i = randomString.length -1; i >= 0; i--) {
            newString = newString.concat(randomString[i]);
        }
        return newString;

    } else {
        console.log('La funzione richiede una stringa');
        return;
    }
}

*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/




/*
function upperFirst(randomString) {
    
    if (typeof randomString === 'string') {
        
        let newString = randomString[0].toUpperCase();
        for (let i = 1; i < randomString.length; i++) {
            newString = newString.concat(randomString[i]);
        }

        return newString;

    } else {
        console.log('La funzione richiede una stringa');
        return;
    }
}
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/


/*
function giveMeRandom(n){
    if (typeof n === 'number') {

        let array = [];
        for (let i = 0; i < n; i++) {
            let random = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
            array.push(random);
            
        }
        return array;
    } else {
        console.log('La funzione richiede un numero');
        return;
    }
}
*/

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/





/*
let area = (l1,l2) =>{
    if (typeof l1 === 'number' && typeof l2 === 'number') {
        return l1*l2;
    } else {
        console.log('La funzione richiede due numeri');
        return;
    }
}
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

// let crazyDiff = (n) =>{
//     if (typeof n === 'number') {
//         return (n-19 * -(n-19) < 19)?n-19 : (n-19 * -(n-19)) * 3;
//     } else {
//         console.log('La funzione richiede un numero');
//         return;
//     }
// }

// console.log(crazyDiff(10));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/*
let codify = (randomString) =>{

    if (typeof randomString === 'string') {
        let codeString = 'code';
        if(randomString.length >= codeString.length){
            let checkString = randomString.slice(0,4);
            if (checkString === 'code') {
                return randomString;
            } else {
                let newString = codeString+randomString;
                return newString;
            }
        }else{
            let newString = codeString+randomString;
            return newString;
        }
        
        

    } else {
        console.log('La funzione richiede una stringa');
        return;
    }
}
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/


/*
let check3and7 = (positiveNumber)=>{
    if (typeof positiveNumber === 'number') {
        if ((positiveNumber % 3 === 0) || (positiveNumber % 7 === 0)) {
            return true;
        } else {
            return false;
        }
    } else {
        console.log('La funzione richiede un numero');
        return;
    }
}
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/



/*
let cutString = (randomString)=>{
    if (typeof randomString === 'string') {
        let indexLastChar = randomString.length-1;
        let newString = randomString.slice(1,indexLastChar);
        return newString;
    } else {
        console.log('La funzione richiede una stringa');
        return;
    }
}
*/
