// i metodi delle stringhe : cercare le stringhe

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
console.log(string.slice( -5, 12));
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
console.log(strArray)