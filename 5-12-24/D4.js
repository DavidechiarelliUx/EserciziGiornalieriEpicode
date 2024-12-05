/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area (l1=0 , l2=0){
    return (l1 * l2);
}

let rettangolo=area(20 , 12);

console.log(rettangolo);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1 = 0 , num2 = 0) {
    if (num1 === num2){
        let moltiplicazione = (num1 + num2)*3;
        
        return moltiplicazione;
    }else{
        let somma = num1 + num2;

        return somma;
    }
}

let sum=crazySum(4 , 4);

console.log(sum);
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
 utilizza abs che trasforma il valore in valore assoluto
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num1=0, num2=19){
    let diff=Math.abs(num1-num2);

    if(diff > 19){
        return diff*3;
    }else{
        return diff;
    }
}

let calcoloDiff = crazyDiff(119);
console.log(calcoloDiff);





/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n=0) {
    if(n >= 20 && n <= 100){
        return true;
    }else if(n === 400){
        return true;
    }else{
        return false;
    }
}

let controllo = boundary(400);
console.log(controllo);
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(string=""){

    if(string.startsWith("EPICODE") !== true ){
        let stringa1="EPICODE";

        return stringa1 + " " + string;
    }else{
        return string;
    }
}

let createString = epify("CIAO EPICODE CIAO");

console.log(createString);
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(num=0){

    if (num % 7 === 0 || num % 3 === 0){
        return ( "il numero è un multiplo di 3 o di 7");
    }else{
        return ( "il numero non è un multiplo di 3 o di 7");
    }
}


let controlloNum =check3and7(120);
console.log(controlloNum);
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString (string = ""){

    let newString = "";

    for (let i = string.length -1; i >= 0; i--){
        newString=newString + string[i];

    }

    return newString;
}

let revStr = reverseString("number parade");

console.log(revStr);
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst (string = ""){

    let arrayString = string.split(" ");

    for(let i = 0; i < arrayString.length; i++){
        let element = arrayString[i];

        element = arrayString[i].charAt(0).toUpperCase()+arrayString[i].slice(1);
        
        arrayString[i] = element;
    }

    return arrayString.join(" ");
}

let newString =upperFirst("mi chiamo davide e ho 24 anni");
console.log(newString); 


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(string = ""){

    let newString = string.slice(1, -1);

    

    

    return newString;
}

let a = cutString("ciao a tutti")

console.log(a);
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n = 0) {
    let casualNumber = [];

    for (let i = 0; i < n; i++) {
    
        let randomNum = Math.floor(Math.random() * 11);
        casualNumber.push(randomNum); 
    }

    return casualNumber;
}

let randomArray = giveMeRandom(10);

console.log(randomArray);