// Ecmascript ES6 -> 
// spread operator : ... ( i tre puntini ) e mi permette di clonare degli oggetti ;

let obj1 = {
    name : "davide",
    lastName : "rossi",
    city : "roma",
}

let obj2 = obj1 // QUESTO NON SI DOVREBBE FARE PERCHE' CREIAMO DUE PUNTATORI ALLA STESSA MEMORIA 

// COME COPIO UN OGGETTO ?

let obj3 = {
    ...obj1,  // CREO UN NUOVO OGGETTO IN UNA NUOVA ZONA DI MEMORIA E CLONO AL SUO INTERNO I VALORI DI OBJ1;
}
let obj4 = Object.assign({}, obj1); // Prima di es6 clono i valori di un oggetto in una nuova zona di memoria in questo modo


// STESSA COSA PER GLI ARREY : 

let array = [ 1 , 2 , 3, 5];

let arr2 = array // Stesso problema di prima due puntatori alla stessa zona di memoria,

let arr3 = [...array]; // CREO UN NUOVO ARRAY IN UNA NUOVA ZONA DI MEMORIA E CLONO AL SUO INTERNO I VALORI DI ARREY

let arr4 = Object.assign([],array);// prima di es6


//________________________ REST PARAMETER __________________________//

//default parameter : inserisco x = 0 per dare un parametro di default quando non inserisco i parametri alla richiamata della funzione
//cosi che x se non lo passo vale 0 di default 

function fun1(x = 0 , y = 0 , z = 25){

}

// in questo caso richiamando la mia funzione , x = 5 , y = 9, e z di default vale 25;
fun1(5 , 9);

//CON IL REST PARAMETER SI SEMPLIFICA PERCHE INSERENDO ...ARGS IO MI PRENDO QUALSIASI ARGOMENTO PASSATO COME PARAMETRO ALLA FUNZIONE:

function fun2 (...args){
    console.log(" i parametri della mia funzione sono : ", args);
}

fun2(5, 10 ,34);

// STESSA COSA PER GLI ARRAY : 

let arr5 = [4, 6 , 9];


//...ARGS , args è un nome che do io per prendere gli argomenti di un array, pero potevo chiamarlo anche pippo
function fun3 (...pippo){// ho inserito pippo al posto di args e fa la stessa cosa di args;
    console.log("gli elementi degli array sono : " + pippo);
    for(const element of pippo){
        console.log ( element);
    }
};

fun3 (...arr5, "cinque");

// DESTRUCTORING OPERATOR 

//PERMETTE DI ESTRARRE VALORI DA OGGETTI O DA ARRAY E INSERIRLI DIRETTAMENTE IN NUOVE VARIABILI/COSTANTI.
//IL RISULTATO è UN CODICE PIU PULITO.

let ob5 = {
    name:"davide",
    cognome : "chiarelli",
    eta: 25,
};

//estraggo dei valori contenuti in un oggetto e inizializzo delle variabili : 
let name1 = ob5.name;
let cognome1 = ob5.cognome;
let eta1 = ob5.eta;

console.log ( name1 , cognome1, eta1);

//con la destructoring noi possiamo fare direttamente questo : inserendo gli stessi nomi degli oggetti ( senno undefined ):

let {name, cognome, eta} = ob5;

console.log(name, cognome, eta);

// pero i nomi del destructoring possono essere modificati cosi che per esigenze ho dei valori diversi : 

let {name : nomeNuovo, cognome : cognomeNuovo, eta : etaNuovo}= ob5;

console.log(nomeNuovo, etaNuovo, cognomeNuovo);// cosi mi stampo le variabili con nomi differenti rispetto alle proprietà;

//PER GLI ARRRAY :


let arr6 = [ 1 , 4, 6];

//prima di es6 : 
let uno = arr6[0];
let due = arr6[1];
let tre = arr6[2];

console.log ( uno , due , tre);
//destructoring array  dopo es6: 

let [ f , g , b] = arr6;

console.log (f , g , b);


//_____________________TEMPLATE LITERALS _____________________________//

//essi sono delineati dal bactick , il bacticlk lo faccio con option + 9

//prima del template literal facevo cosi : 
let str = "Lorem ipsum dolor, sit amet consectetur adipisicing elit." + name + " Tenetur sunt reiciendis ex, aspernatur " +  cognome  + "voluptas facere doloremque voluptatem voluptates, consequuntur quibusdam perferendis atque distinctio, odit vel nostrum. Magni non labore repellendus";


// con il template literals con il backtick basta posso concatenare il testo con le variabili, inoltre posso andare a capo quando voglio  ; 
//inserisco le variabili annidandolo dentro ${ variabili };
let str2 = `  Lorem ipsum dolor, sit amet ${name} 
            consectetur adipisicing elit.
            ${cognome} Tenetur sunt reiciendis ex, aspernatur " +  
            "voluptas facere doloremque voluptatem voluptates, consequuntur
            quibusdam perferendis atque distinctio, odit vel nostrum. Magni non labore 
            repellendus` ;

console.log(str2);

//altri metodi sono : string.startWith (), string.endsWith(), string.includes();


//__________________________GLI ARRAY________________________________//
//ripasso array ;
//array , metodi degli array come il sort () ordinare alfabeticamente; 

let cose = [ "cane" , "briciola ", "formaggio"];

cose.sort();
console.log(cose);

//pop : eliminare un elemento
//push : aggiungere
//shft unshift: elliminare e aggiungere dall'inizio 
//splice: aggiungere rimuovere in qualsiasi punto dell array e ji chiede un valore di start quanti valori eliminare e il valore da aggiungere
//cose.splice ( 1, 1, "telefono"):
cose.splice(1, 0, "telefono");

console.log(cose);
//concat : concatenae piu array insieme

//slice : estrae ritornando un nuovo array con start (obbligatorio ) e end ( opzionale ma estrae fino alla fine):
let nuoveCose=cose.slice(1,3);
console.log(nuoveCose);


//______________________________ITERAZIONE DEGLI ARRAY _________________//

//per ciclare un array esistono il for in il for e il for of ma esiste anche il : 

//foreach()

for (let index = 0; index < cose.length; index++) {
    const element = cose[index];

}

for (const key in cose) {

    const element = cose[key];    
}

for (const element of cose) {
    
}

//con ec6  sono stati introdotti foreach | map | filter | find | reduce

cose.forEach(element => console.log(element))//il for each mi serve solo per leggere!

//facciamo un nuovo array :

let numArray = [ 45,22,23,12];

let funcArrow = num => console.log(num);

funcArrow(99);


numArray.forEach(funcArrow)//per ogni elemento invoca func arrow che in questo caso stampa ogni elemento di arrayNum 
                        //dentro il forEach quindi ti chiede di inserire una funzione chiamata callback

//se il foreach mi serve solo per leggerlo adesso vediamo 


//IL MAP :

//crea un nuovo array applicando ad ogni elemento una determinata funzione

let arrModificato = numArray.map(num => num * 2 ); //itera ogni elemento di array num me lo prendo e crea un nuovo array e lo moltiplica per 2

console.log(arrModificato); 
console.log(numArray);//nel mentre ho modificato il mio nuovo array con il map il mio array originale rimane invariato


//quindi array per leggere e map modificare su un altro array 

// IL FILTER :

//mi serve per filtrare l'output secondo un criterio e mi restituisce un nuovo array modificato :

let arrFilter = numArray.filter(num => num > 40);

console.log(arrFilter)// mi va a filtrare tutti gli elementi dell array secondo il mio output : maggiore di 40
                      //e me li restituisce su un nuovo array


//REDUCE : 

//ritorna un unico valore applicando una funzione a tutti gli elementi dell'array ;
//si puo utilizzare solo su array di numeri; 

let result = numArray.reduce((acc , num)=> acc + num , 0); //in questo caso sto facendo la somma dentro il mio ciclo prendendo acc come accumulatore e il num per il numero dell'array , 0 sta per dove deve iniziare 
                                                          // quindi fa acc + 0 = 0 ; 0 + il primo numero della arrrey , poi il secondo e cosi via 
console.log(result);

//altri metodi : 

//EVERY() : 

let numMagg40 = numArray.every(num => num > 40); // mi stampa un valore booleano e mi va a controllare se tutti i numeri sono maggiori 40;
console.log(numMagg40); // se tutti i numeri sono maggiori di dieci allora mi da true in contrario se almeno uno e minore e' false

//SOME() :

let numMagg30 = numArray.some(num => num > 30); // mi stampa un valore booleano e mi va a controllare se almeno uno è maggiore di 30;
console.log(numMagg30);// se almeno uno è maggire di 30 da true; 

//INDEX OF

const coseCane = cose.indexOf("cane");
console.log(coseCane + "ciao" ); //mi stampa la posizione dell indice del cane quindi 2

//FIND 

//il find mi cerca un elemento in base ad una condizione
let num45 = numArray.find(num => num === 45);
console.log(num45);

//FINDINDEX()

//determina la posizione di un elemento array che risponde ad una condizione quindi ritorna l'indice :
num45 = numArray.findIndex(num => num === 45);
console.log(num45);

//sia find che index mi ritornano sempre il primo 

//utili per gli oggetti.



//esercizi del giorno d7

console.log( "___________________________ ESERCIZI __________________");
/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function concStr( str1 , str2 ){

    let s1 = str1.slice(0,2);
    let s2 = str2.slice(-3);

    let newStr = s1.concat(s2);

    return newStr.toUpperCase();
}

let stringa = concStr("cIao" , "tutti");
console.log(stringa);

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

function randArr( num ){

    let array = [];

    for (let index = 0; index < num; index++) {
    
        let n = Math.floor(Math.random()*101);

        array.push (n);
    }

    return array
}

let randomArray=randArr(10)
console.log(randomArray)
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
function arrPari(arr){

    let ritornoNumPari = arr.filter(element => element % 2 === 0);

    return ritornoNumPari;
}
let arrayPari = arrPari(randomArray)
console.log(arrPari(arrayPari));


/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function somma ( arr ){

    let contatore = 0;

    arr.forEach(element => {
        contatore += element;
    });

    return contatore;
}

let sommaNum = somma(randomArray);

console.log( sommaNum );


/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sommaReduce ( arr ){

    let sumReduce;

    sumReduce=arr.reduce((acc , valore) => acc + valore , 0);

    return sumReduce;
}

let sommaNumReduce = sommaReduce(randomArray);

console.log( sommaNumReduce );


/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

function incrementNum ( arr , num ){

    return arr.map(element => element + num);
 
}

let arrIncrement = incrementNum(randomArray, 4);
console.log(arrIncrement);


/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

function lunghezzaArray ( arr ) {

    return arr.map(str => str.length);
}

let animale = ["CANE", "cinque", "lupo"];

let lunghezza = lunghezzaArray(animale);
console.log(lunghezza);
/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

function dispariFunc (arr){

    const dispArr =[];
    arr.forEach(ele => {
        if(ele %2 !== 0){
            dispArr.push(ele)
        }
    } )

    return dispArr;
}

let dispariArr = dispariFunc(randomArray);
console.log(dispariArr);
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
    {
      Title: 'The Lord of the Rings: The Fellowship of the Ring',
      Year: '2001',
      imdbID: 'tt0120737',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Return of the King',
      Year: '2003',
      imdbID: 'tt0167260',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Two Towers',
      Year: '2002',
      imdbID: 'tt0167261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of War',
      Year: '2005',
      imdbID: 'tt0399295',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'Lords of Dogtown',
      Year: '2005',
      imdbID: 'tt0355702',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings',
      Year: '1978',
      imdbID: 'tt0077869',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1990',
      imdbID: 'tt0100054',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
      Title: 'The Lords of Salem',
      Year: '2012',
      imdbID: 'tt1731697',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
      Year: '1984',
      imdbID: 'tt0087365',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1963',
      imdbID: 'tt0057261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
      Title: 'The Avengers',
      Year: '2012',
      imdbID: 'tt0848228',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Infinity War',
      Year: '2018',
      imdbID: 'tt4154756',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Age of Ultron',
      Year: '2015',
      imdbID: 'tt2395427',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Endgame',
      Year: '2019',
      imdbID: 'tt4154796',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
  ]
  
  /* ESERCIZIO 9 (forEach)
    Scrivi una funzione per trovare il film più vecchio nell'array fornito.
  */
  

    /* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/


/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/


/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/


/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/