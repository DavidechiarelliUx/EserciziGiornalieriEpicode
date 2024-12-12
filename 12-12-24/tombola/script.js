

function createTable (n){

    let table = document.querySelector("#tabellone");
    
    
    
    for (let index = 1; index < n+1; index++) {
        
        console.log(index);
        
        let numberCell=document.createElement("div");
        let number = document.createElement("h3");

        numberCell.classList.add("numberCell");
        number.innerText=index;


        table.appendChild(numberCell);
        numberCell.appendChild(number);
    }
}

createTable(76);

function buttonRandomNumber(){

}

buttonRandomNumber();