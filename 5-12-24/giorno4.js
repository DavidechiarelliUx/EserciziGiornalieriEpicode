// i metodi delle stringhe : cercare le stringhe

// const { min } = require("d3-array");

let string = "Ciao a tutti";

// andiamo a contare tutti i caratteri compresi gli spazi della string string
console.log(string.length);

// cerchiamo la stringa tutti nella stringa string
console.log(string.indexOf("tutti"));

// cerchiamo la prima a della stringa
console.log(string.indexOf("a"));

// cerchiamo l'ultima a della stringa
console.log(string.lastIndexOf("a"));

// il search : ci permette di fare maggiori controlli , e può servire per fare controlli ( tipo 
// controllare l'email o il codice fiscale ) (sito per facilitare l'inserimento dentro il search
// è Regex.io)

console.log(string.search("a"));

// slice() e substring() : estrarre parte della stringa 

// slice anche i valori negativi : es sotto parto dall'indice -5 quindi dalla t di tutti e arrivo alla fine di tutti
console.log(string.slice( 1));
// substring non prende i valori negativi
console.log(string.substring(0 , 5));

// replace : sostituire la prima lettera con la seconda o delle lettere e replaceAll le cambia tutte
console.log(string.replaceAll("a", "❤️‍🔥"));

// toUpperCase e toLowerCase : serve per uniformare tutti i caratteri cosi che poi posso lavorarci dentro

console.log(string.toUpperCase())

// concat : serve per concatenare le stringhe;
console.log(string.concat(" buon corso"))

// trim : mi elimina gli spazi vuoti all'inizio e alla fine di un testo

let string1 =" ciao a tutti ";
console.log(string1);
console.log(string1.trim())

// charAt : mi permette di cercare il carattere dato un indice :

console.log(string.charAt(4));

// split mi serve per fare un taglio o un separatore per ottenere un array della stringa

let strArray = string.split("");
console.log(strArray);


// **********************************************************************************************

// LE FUNZIONI : 

// una funzione è una lista di diverse istruzioni raccolte in una singola unità, una volta definito poi 
// può essere richiamato quante volte si voglia.
// le funzioni possono ricevere ( o meno ) degli input e possono restituire ( o meno ) degli output.

// funzioni predefinite : 
// window.alert("ok");
// console.log("ciao");
// document.write("ciao a tutti");
// let num = prompt("inserisci un numero");
// console.log(num);

// let num1 = prompt("inserisci un numero");
// let num2 = prompt("inserisci il secondo numero");
// document.write(+num1 + +num2);

// _________________________

function somma() {
    let num1 = prompt("inserisci un numero");
    let num2 = prompt("inserisci il secondo numero");
    // console.log( +num1 + +num2);

    // ci ritorniamo il valore con il return e ce lo prendiamo creando una nuova variabile nel quale verrà salvata il nostro risultato :
    return (+num1 + +num2);
}

let richiamoSomma = somma();

console.log(richiamoSomma);

// I PARAMETRI : 
// i parametri attribuiscono alla funzione la possibilità di manipolare
// dei valori e di utilizzarli per l'esecuzione di istruzioni
// ad esempio dovendo ottenere la somma di due numeri, possiamo definire due parametri in una 
// funzione : 

function somma ( numero1, numero2) {
    return numero1 + numero2;
}

// dentro la variabile mi richiamo la somma ed inserisco i valori dei parametri inseriti.
let risultatoFunzione= somma( 5 , 7);

console.log(risultatoFunzione);

// come faccio ad essere sicuro che inseriamo i numeri all'interno della funzione precedente ? 
// facciamo un controllo in piu con un if e un else : 

function controlloSomma( numero1 , numero2 ){
    if(typeof numero1 === "number" && typeof numero2 === "number"){
        let res = numero1 + numero2 ;
        return res;
    }else{
        return console.log(" not a namber");
    }
}

let risultatoControlloSomma = controlloSomma (9 , 8);
console.log(risultatoControlloSomma);

// possiamo dare dei valori di default nei parametri : 
function defaultParametri ( x = 0, y = 0){
    return x + y ;
}
// richiamando la funzione default parametri e non inserendo i valori dei due parametri di default x = 0 e y = 0 ;
let defaultSomma = defaultParametri();

console.log(defaultSomma);

// come faccio a sapere quanti parametri ci sono nella funzione ? ce li prendiamo grazie ad argument e essendo un array ci facciamo un 
// ciclo for : 

function sumVarArgs(...args) {
    console.log("numero parametri :", args) //...nome -> rest parameter ( simile allo spread operator che estrae i valori di un oggetto, più utilizzato rispetto ad arguments.
    console.log("numero parametri : " , arguments); // arguments è un oggetto predefinito di JS che contiene tutti i parametri che inserisco in una funzione;
    let result = 0 ;
    for (const element of arguments){
        result = result + element;
    }
    return result;
}

let risultatoArgomentiVariabili = sumVarArgs( 5 , 5, 29 , 34 , 43);// questi sono i parametri della funzione che vengono salvati all'interno sia di ...args che arguments;
console.log ( "la somma dei parametri variabili è : " + risultatoArgomentiVariabili);

// spiegazione spread operator : 

let arr = [ "ciao", "a tutti", "sono" , " un Array"];
// let arr2 = arr;// questo da un errore perche puntano entrambi allo stesso indirizzo di memoria

let arr3 = [...arr]// cio mi serve per copiare correttamente gli argomenti all'interno degli array o di oggetti;
// console.log(arr);
console.log(arr3);


console.log("*******************************************************************+");
// ********************************************************************************************************************//

// Hosting & Scope

// tutte le dichiarazioni in javascript vengono sollevate in alto quindi se io richiamo la mia 
// funzione prima della dichiarazione di essa funziona lo stesso, questo si chiama Hosting 
// stessa cosa per le variabili ( pero la sua dichiarazione avviene alla riga da essa assegnata
// quindi se richiamo la variabile prima della sua inizializzazione mi da che la variabile esiste 
// ma mi da undefined ).

// per le funzioni

func()

function func () {
    console.log( "sono la funzione func");
}

func();

//per le variabili questa cosa funziona solo con var ; con let e const che è sono state introdotte dopo mi da errore
// dicendomi che non posso accedere all'inizializzazione della variabile prima che la inizializzi;

console.log(text);

var text; //dichiarazione
text = "ciao"; //inizializzazione

// un altro problemino ( che può essere anche un vantaggio) di var è che se io creo una variabile locale con var, lui 
// diventa una variabile globale 


console.log("*******************************************************************+")
// Tipi Di Funzioni : 

a();// mi da l'accesso 
// b();//non mi da l'accesso perchè l'ho dichiarata con il let

function  a() {
    console.log("sono una dichiarazione di funzione");
}


let b =function(){
    console.log("sono una funzione espressione");
}

// quindi se io vado a fare ciò : 


if(true){
    function c() {
        console.log("PAPPAPERO mi vedi anche se sto dentro un if e quindi sono sempre disponibile");
    }
}
c();

// se la creo come espressione


if(true){
    let d = function () {
        console.log("non sono disponibile e vengo attraversato solo se è true");
    }
}

// d();//mi da errore perchè la funzione non può uscire al di fuori dell' if 


// ARROW FUNCTION : per il momento le arrow function sono uguali alle funzioni ma semplificate, non ho bisogno di scrivere function 
// e posso anche omettere le parentesi se ho un return semplice : 

let e = (num1, num2) => num1 + num2;

console.log(e(8 ,10));

// posso scriverla così :

let f = (num1 , num2 , num3) => {
    return num1 + num2 + num3;
} 

console.log(f(12 , 22, 33));


// METODI MATH E DATE : 
// La libreria math è una classe che contiene tuta quanta una serie di metodi matematici gia predefiniti per es: random;
// quelle piu utili sono : random - ceil - floor - round - min - max 
let randNum = Math.random();// un numero rundom senza niente ritorna un numero random tra 0 e 1 ; 

console.log(randNum)

// se voglio il mio numero intero faccio * 100
let randNum1 = Math.random()*100;

console.log(randNum1)

// ceil
let ceilNum = Math.ceil(randNum1);//arrotondo per eccesso il rundNum per avere un numero intero;

console.log(ceilNum);

//floor 

let floorNum = Math.floor(randNum1);//arrotondo per difetto il rundNum per avere un numero intero;

console.log(floorNum);

//round

let roundNum = Math.round(randNum1);//metodo arrotonda un numero all'intero più vicino. che sia per eccesso o difetto;

console.log(roundNum);

//min/max serve per trovare subito il numero minimo/massimo del mio array

let serieNumeri =[34 , 56 , 23, 112, 45];

let minNum = Math.min(serieNumeri);
let maxNum = Math.max(serieNumeri);

console.log(minNum, maxNum);


//Metodi Data 

let data = new Date();

console.log(data)

// ___________

let g = new Date(2024 , 11 , 5); // i mesi vanno da 0 a 11 quindi gennaio = a 0  e dicembre = 11
console.log(g)

//posso inserirlo anche come stringa :
let dataStringa = new Date( "2024-1-12");

console.log(dataStringa);

//il date lavore in millisecondi e conteggia il tempo dal 1 gennaio del 1970 fino ad oggi e con il metodo parse() 
// trasforma i millesecondi in data


// metodi get() , per prelevare le informazioni : 

console.log(dataStringa.getFullYear());//mi restituisce l'anno dell'oggetto dataStringa, per i mesi getMonth(), per i giorni getDate e cosi via;

//con il set() mi scrivo una data;

console.log(g.setFullYear());