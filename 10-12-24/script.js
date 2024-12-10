//IL DOM = DOCUMENT OBJECT MODEL

// Selezioniamo un elemento con un id dell' html
let sottotit = document.getElementById("h2");

console.log(sottotit);

sottotit.style.textAlign="center";

sottotit.style.color= "red";



//selezioniamo un elemento con una classe 

//per accedere alla posizione dell'elemento con la classe o faccio un ciclo for per prendermele tutte, oppure dato che mi conosce 
//come un array accedo alla prima classe con l'indice
let tit = document.getElementsByClassName("titolo")[0];

console.dir(tit);

tit.style.color= "green";
// oppure inserisco l'indice direttamente da qui : 
// tit[0].style.color= "green";



//selezioniamo il nostro elemento senza id o classi quindi solo il tag
//utilizziamo sempre l'indice per prendermelo perche ce ne sono di più
let p =document.getElementsByTagName("p");

console.log(p);

p[0].style.color="grey";

p[1].style.color="purple";



//_________________QUERYSELECTOR | QUERYSELECTORALL | _________________________
//query selector  = elemento che corrisponde all' selettore css specificato
//questo è stato creato per eliminare il fatto dell'indice che poteva creare problemi


//query selector mi prende solo il primo div dell'elemento p

// let divP = document.querySelector("div  p");
let divP = document.querySelector("div > p");

divP.style.fontWeight = "bold"

let byClass = document.querySelector(".span")

byClass.style.color = "orange"

//query selector all li prende tutti invece 

let allSpan = document.querySelectorAll( "div > span");

allSpan.forEach(span => {
    span.style.color = "blue";
});

//______________________________ CREARE ELEMENTI_________________

//createElement

let main = document.querySelector("main"); // seleziono il tag html
let section = document.createElement("section");// creo il tag section

let par = document.createElement("p"); // creo un nuov paragrafo

par.innerText="CIAO SONO IL PARAGRAFO CREATO IN JS"; // scrivo dentro il nuovo paragrafo

main.appendChild(section); // appendo la section dentro il main
section.appendChild(par);// appendo il p dentro la section creata


