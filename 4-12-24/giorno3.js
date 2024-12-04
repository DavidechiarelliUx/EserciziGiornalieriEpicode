console.log("Giorno 3 : Strutture di controllo e strutture iterative");


let mese = 9;

switch (mese) {

    case 1 :
        console.log("gennaio");
        break;
    case 2 : 
        console.log("febbraio");
        break;
    case 3 : 
        console.log("marzo");
        break;
    case 4 :
        console.log("aprile");
        break;
    case 5 :
        console.log("maggio");
        break;
    case 6 :
    case 7 :
    case 8 :
        console.log("altri mesi")
        break;
    case (9 || 10) :
        console.log("mesi invernali");
        break
    default :
        console.log("non è un giorno del mese");
        break;
    }


// i cicli while - do while - for ( for in - for of - for each) :

// while
// while ( condizione ) {
//     istruzioni...
//     incremento
// }

let num = 0 ;

while(num <= 20) {
    console.log(num);
    num ++;
// per un maggiore controllo utilizzo un if con il break ( utile per non creare cicli infiniti ) :
    if(num === 10){
        console.log(10)
        break;
    }
}


// ciclo do while 
// almeno una volta controlla 

// do {
//     istruzione...
//     incremento...
// }while(condizione)

let num1= 9;
do {
    console.log(num1);
    num1++;

}while(num1 <= 20 );


// ciclo for 
// for (inizializzazione; condizione; incremento){ ... istruzioni };

let num2= 0;
for (num2; num2 <= 10; num2++){
    console.log(num2);
}

// utile per iterare dentro un array

let array = [ 2 , 12, 32, 44,];
let somma= 0;
for (let i = 0 ; i < array.length; i++) {
    console.log(somma = somma + array[i]);
}

// for in è specifico per iterare un array scorre tutti i valori dal primo all'ultimo
// for ( const key in object){...istruzioni }
for (const key in array){
    console.log(key, array[key])
}

// for of 
// for ( const element of object ){ ... istruzioni }
// restituisce direttamente i valori

for ( const element of array){
    console.log(element)
}

// con gli oggetti con il ciclo for in

let obj = {
    name:"davide",
    cognome :"chiarelli",
    eta : 24,
}

for (const i in obj){
    console.log(i , obj[i]);
};

