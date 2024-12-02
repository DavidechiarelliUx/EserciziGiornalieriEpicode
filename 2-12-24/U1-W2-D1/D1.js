/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let datatypeStringa="esistono vari tipi di datatype ognuno ha una sua importanza,servono per dare un tipo di valore alla variabile creata, il primo datatype da conoscere è il tipo stringa che serve per scrivere parole o frasi all'interno di una variabile, la sintassi è : chiave nome = 'valore'; per es : let nome = 'davide';";
console.log(datatypeStringa);
let datatypeNumber=" il number serve per dare un valore numerico alla tua variabile, la sintassi è chiave nome = numero; per es : let num = 4; ";
console.log(datatypeNumber);
let datatypeBoolean="il datatype boolean serve per dare un valore booleano ( vero o falso ) alla tua variabile , quindi il valore può essere o true o false in base a ciò che ti serve in quel momento, la sintassi è chiave nome = boolean; per es : const maggiorenne = true;";
console.log(datatypeBoolean);
let datatypeUndefined="il valore undefined è un valore indefinto alla variabile, ciò vuoldire che abbiamo creato la nostra variabile ma non gli abbiamo assegnato nessun valore e quindi javascript ci restituisce undefined, per es : let nome; non abbiamo assegnato un valore nome e javascriptstamperà in console undefined poichè indefinito";
console.log(datatypeUndefined);
let datatypeNull="il tipo di valore Null, è un valore che nopi assegnamo per specificare che in quella determinata variabile il valore sia assente, o comunque sconosciuto, per es : let number= null;";
console.log(datatypeNull);

let datatypeObject_Array="esistono anche i tipi di dati oggetto e array che però oggi non abbiamo visto";
/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myName= "Davide";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1=12;
let num2=20;
let somma = num1+num2;

console.log(num1+num2);
// oppure
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// myName="Chiarelli";

// console.log(myName);

let spiegazioneConst="dato che ho creato la variabile con const che è una chiave per una variabile constante, cioè non modificabile il my name non può essere cambiato";
console.log(spiegazioneConst);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sottrazione = x - 4;

console.log(sottrazione);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

console.log(name1 != name2);

console.log (name1.toLowerCase != name2.toLowerCase);