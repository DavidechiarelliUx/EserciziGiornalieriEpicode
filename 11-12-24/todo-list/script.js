    let button = document.querySelector("button");


    function createTodo(){

        button.addEventListener("click",(e)=>{
            
            e.preventDefault();
            let input = document.querySelector("input");
            let newDiv = document.createElement("div");
            let newH2 = document.createElement("h2");
            let checked = document.createElement("button");
            let remove = document.createElement("button");
            let data = document.createElement("p");

            let newData = new Date();

            let gg ;
            let mm;
            let years;

            gg= newData.getDate() + "/"
            mm = newData.getMonth() + 1 + "/";
            years =newData.getFullYear();

            // console.log(`oggi è il ${gg} del mese ${mm} dell' anno ${years}`)
            // console.dir(input.value);
            
            newH2.textContent=input.value;
            checked.textContent="completato";
            remove.textContent="rimuovi task";
            data.textContent=`oggi è il ${gg} del mese ${mm} dell' anno ${years}`;

            newH2.style.display = "inline-block";
            checked.style.display = "inline-block";
            remove.style.color="white";
            remove.style.backgroundColor="orange";
            
            newH2.style.verticalAlign = "middle";
            checked.style.verticalAlign = "middle";
            remove.style.verticalAlign = "middle";
            data.style.verticalAlign = "middle";

            newH2.style.margin = "0 10px 0 0";
            checked.style.margin = "0 10px 0 0";
            remove.style.margin = "0 10px 0 0";
            data.style.margin = "0px 10px 0 0";
            
            document.body.appendChild(newDiv);
            newDiv.appendChild(newH2);
            newDiv.appendChild(checked);
            newDiv.appendChild(remove);
            newDiv.appendChild(data);

            completedTask(newH2 , checked);
            removeTask(newH2 , checked , remove, data);
        })
        
}

createTodo();

function completedTask (newH2, checked){

    checked.addEventListener("click",(e)=> {
        e.preventDefault();

        console.log(checked);
        newH2.style.textDecoration="line-through"
    })
}

function removeTask (newH2, checked, remove, data){


    remove.addEventListener("click", (e)=> {
        e.preventDefault();

        console.log(checked);
        newH2.style.display="none";
        checked.style.display="none";
        remove.style.display="none";
        data.style.display="none";
    })

}
