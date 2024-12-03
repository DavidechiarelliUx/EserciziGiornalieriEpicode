// object:

let person = {
    nome: "davide",
    cognome: "chiarelli",
    età: 24,
    address : {
        via :"cairo",
        nazione : "ita",
        città : "roma",
    }
};

console.log(person.nome);

person.nome = "peppe";

person.fiscalCode = "CHRDVD99...";

delete person.età;

console.log(person);
// let person2 = person; errore 
// person2.nome="gino"
console.log("]]]]]]]]]]]]]]]]]]]")

// console.log(person2);

// adesso che sono uguali ogni operazione che faccio agli oggetti cambio sia in uno che nell'altro i valori
// comportamento diverso per i tipi di dato semplici dove se io copio x=20 ; con y=x ; e aggiungo y++ modifico 
// solo y; questo perche io rendo costante è l'indirizzo a quell'oggetto quindi tutto ciò che è all'interno
// del mio oggetto. quindi fare ciò let person2 = person; è sbagliato, per fare una copia dell oggetto ci sono 
// due modi sicuri : 1 : object.assign () o in alternativa lo spread operator : {...object}

// object.assign()

let person2 = Object.assign({}, person);

person2.nome="gino";
console.log(person);
console.log(person2);

// in questo modo riesco a modificare sia student uno che student 2 senza che si copiano a vicenda,

// secondo metodo
console.log("______________________")

const person3 = {...person};

person3.nome="davide";

console.log(person);
console.log(person2);
console.log(person3);


// array 

const animali = ["gatto", "cane", "mosca", "pesce"];
console.log(animali);
console.log(animali[0]);
// array viene considerato oggetto
console.log(typeof animali);
console.log(animali.length);

// array di oggetti;

const objectArray =[ person , person2, person3];

console.log(objectArray);

console.log(objectArray[0].nome);

const unAnimale = animali[1];
console.log(unAnimale);

// se provo a copiare l'array con un altro array e poi provo a modificarlo, mi da lo stesso errore di prima

const animaleModifica =[...animali];

animaleModifica.push("topo");

animali.push("anatra");

console.log(animaleModifica);
console.log(animali.sort());

// array di numeri e metodi :

// sort ordina 

const number = [ 1, 43,23,8,99,87,];

number.sort();//ordina array convertendo i numeri in stringa, quindi ci sta di riordinare gli array in ordine alfabetico, per i numeri cè una function però serve poco
number.length;//conta elemento
console.log(number);
number.push(21);//aggiunge
console.log(number)
number.sort();
console.log(number);
number.pop(8)//elimina elemento
console.log(number);
number.shift();//elimina il primo
console.log(number);
number.unshift(9);//aggiungi come primo
console.log(number);
number.splice(2,3,54,24)//parti da eliminare l'indice due e il secondo per quanti numeri vuoi eliminare in questo caso 3, il terzo lo sostituisce con un altro numero e cosi per le altre virgole
console.log(number);
console.log(number.sort());