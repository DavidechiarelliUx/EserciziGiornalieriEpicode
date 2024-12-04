/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
// let num1 = 11;
// let num2 = 13;

// if(num1>num2){
//   console.log("il numero :"+ num1 + " è maggiore di :" + num2);
// }else if(num1<num2){
//   console.log("il numero :"+ num2 + " è maggiore di :" + num1)
// }else{
//   console.log(" i numeri : "+ num1 +" e :"+ num2 + " sono uguali : ");
// }

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num3=5;
// if(num3 !== 5){
//   console.log("Not Equal");
// }else{
//   console.log("il numero è uguale a 5")
// }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let num4=250;

// if(num4 % 5 === 0){
//   console.log("il numero : " + num4 +" è divisibile per 5");
// }else{
//   console.log("il numero : " + num4 +" non è divisibile per 5");
// }
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let num5 = 2;
// let num6 = 6;

// if(num5 === 8 || num6 === 8 || num5+num6 === 8 || (num5 - num6)=== 8 || (num6 - num5 ) === 8){
//   console.log("il valore di un numero o l'addizzione dei numeri è uguale a 8");
// }else{
//   console.log("l'addizzione o il valore di un numero non corrisponde a 8");
// }
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let product1 = 20;
// let product2 = 14;
// let product3 = 4;
// let product4 = 8;
// let shipping = 10;
// const totalShoppingCart= product1 + product2 + product3 + product4;

// console.log("il costo totale dei prodotti è : "+totalShoppingCart + " €");

// if(totalShoppingCart > 50 ){
//   console.log("spedizione per i prodotti gratuita, totale dovuto :" + totalShoppingCart + " €");
// }else{
//   console.log("il prezzo totale dei prodotti è :" + totalShoppingCart + " € , più le spese di spedizione che ammontano a :" + shipping + " € in totale spenderai : " + (totalShoppingCart + shipping) + " €");
// }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let product1 = 20;
// let product2 = 44;
// let product3 = 4;
// let product4 = 8;
// let shipping = 10;
// const totalCostProduct= product1 + product2 + product3 + product4;

// const blackFriday = (totalCostProduct * 20 / 100 );

// const totalShoppingCart= totalCostProduct - blackFriday; 
// console.log("il costo totale dei prodotti è : "+ totalShoppingCart + " €");

// if(totalShoppingCart > 50 ){
//   console.log("spedizione per i prodotti gratuita, totale dovuto :" + totalShoppingCart + " €");
// }else{
//   console.log("il prezzo totale dei prodotti è :" + totalShoppingCart + " € , più le spese di spedizione che ammontano a :" + shipping + " € in totale spenderai : " + (totalShoppingCart + shipping) + " €");
// }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
// let num1 = 22;
// let num2 = 31;
// let num3 = 31;

// if(num1 >= num2 && num1 >= num3 && num2 >= num3){
//   console.log( " l' ordine dal più alto al più basso è : " + num1 + " " + num2 + " " + num3);
// }else if( num1 >= num2 && num1 >= num3 && num2 < num3){
//   console.log(" l' ordine dal più alto al più basso è : " + num1 + " " + num3 + " " + num2);
// }else if (num2 >= num1 && num2 >= num3 && num1 >= num3){
//   console.log(" l' ordine dal più alto al più basso è : " + num2 + " " + num1 + " " + num3);
// }else if (num2 >= num1 && num2 >= num3 && num1 < num3){
//   console.log(" l' ordine dal più alto al più basso è : " + num2 + " " + num3 + " " + num1);
// }else if (num3 >= num2 && num3 >= num1 && num1 >= num2) {
//   console.log(" l' ordine dal più alto al più basso è : " + num3 + " " + num1 + " " + num2);
// }else{
//   console.log(" l' ordine dal più alto al più basso è : " + num3 + " " + num2 + " " + num1);
// }
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
// let valore = "HOLA";
// let valore1 = 21;

// console.log(typeof valore);
// if(typeof valore1 === "string" ){
//   console.log( "questo valore : "+ valore + " è una stringa")
// }else{
//   console.log("Questo valore : " + valore1 + " è un numero")
// }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num = 190343204789;

// if ( (num % 2) === 0 ){
//   console.log("Il numero : " + num + " è pari");
// }else{
//   console.log("Il numero : " + num + " è dispari");
// }
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
// let val = 5
// if (val < 10 && val > 5 && val != 10) {
//     console.log("Meno di 10");
//   } else if (val < 5) {
//     console.log("Meno di 5");
//   } else {
//     console.log("Uguale a 10 o maggiore");
//   }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

// const me = {
//   name: 'John',
//   lastName: 'Doe',
//   skills: ['javascript', 'html', 'css'],
//   city : "Toronto",
// };

// console.log(me.city);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const me = {
//   name: 'John',
//   lastName: 'Doe',
//   skills: ['javascript', 'html', 'css'],
//   city : "Toronto",
// };
// console.log(me);
// delete me.lastName;

// console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const me = {
//     name: 'John',
//     lastName: 'Doe',
//     skills: ['javascript', 'html', 'css'],
//     city : "Toronto",
//   };

//   me.skills.splice(2,1);

//   console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let array=[];

array.splice (0 , 0 , 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(array);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array.splice(9,1,100);

console.log(array);