// ON CLICK

function myClick(){
    console.log("cliccato");
}


// secondo bottone
let btn = document.querySelectorAll("button");
let btnOnClick2 = btn[1];
console.log(btnOnClick2);

btnOnClick2.onclick = function (){
    alert("click")
}

// terzo bottone
let btnonClick3 = btn[2];
// btnonClick3.addEventListener("click", myClick)
//uguale ma con l'arrowFunction
btnonClick3.addEventListener("click", () => {
    console.log("click");
})


//form

//esiste la proprietà form che intercetta direttamente tutti i form della pagina
let forms = document.forms;

console.log(forms[0]);
console.dir(forms[0])

forms[0].elements[0].addEventListener("click", (e) => {
    e.preventDefault();//senza di esso il mio submit mi aggiorna la pagina cancellandomi i dati salvati
    console.log(forms[0].elements[0].value);
})

// selezioniamo tutti gli input di form :

