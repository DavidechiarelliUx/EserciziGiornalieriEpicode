// TASK 

// CAPIRE QUANTE CELLE GENERARE PER IL MESE CORRENTE ( dovrà funzionare per ogni mese non solo quello attuale );

let now = new Date();
let monthDate=["Gennaio","Febbraio", "Marzo", "Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre" ];
let appointments = [];

function dayIsInTheMonth(){
//mi creo la data di oggi : 

console.log(now);

//e mi vado a prendere l'anno e mese

let getYear = now.getFullYear()
let getMonth = now.getMonth();

console.log(getYear , getMonth);

//calcoliamo quanti giorni ha il mese corrente

let lastDayDate = new Date(getYear , getMonth + 1, 0); // mi vado a prendere l'anno , poi passiamo al mese e gli aggiungiamo uno per prendere il mese
//successivo e se inserisco 0 mi da l'ultimo giorno del mese corrente 

//e poi mi prendo il giorno : 

let lastDayOfTheMonth = lastDayDate.getDate();
console.log(lastDayOfTheMonth);

return lastDayOfTheMonth;
}


//adesso ci creiamo i nostri contenitori con un ciclo for : 

function createDays(days){

    let calendar = document.querySelector("#calendar")
    for(let i = 1 ; i <= days; i++){
        console.log(i);//cosi abbiamo la certezza che i mi stampa i giorni del mese;
    
        let dayCellNode = document.createElement("div"); // creo la cella per ogni giorno del mese
        dayCellNode.classList.add("day");//applico una classe per la formattazione css
    
        appointments.push([]);//per ogni giorno del mese faccio un arrey vuoto e lo aggiungo all'array degli appuntamenti
        dayCellNode.addEventListener("click", (e)=> {
            unselectDay();
            dayCellNode.classList.add("selected");
            showAppointments(i-1);
            changeMeetingDay(i-1);
        })


        let day = document.createElement("h3");
    
        day.innerText= i; //scrivo il giorno nella cella 
    
        //devo leggere il giorno corrente e poi dopo averlo preso gli cambio il colore per far capire a che giorno stiamo
        let today = now.getDate();
        console.log(today);
    
        if(i === today){
            day.classList.add("color-epic");
        }
    
        dayCellNode.appendChild(day); //mi appendo il giorno alla cella 
        calendar.appendChild(dayCellNode);//mi appendo il div contenente i giorni al div calendar dell'html
    
    }
}

//andiamo a rendere dinamico il titolo del mese nella nostra pagina 
function printCurrentMonth() {
    let h1 = document.querySelector("h1");
    let monthIndex = now.getMonth();
    let monthName = monthDate[monthIndex]; // Usa monthDate per il mese
    h1.innerText = monthName;
}

let days = dayIsInTheMonth();

printCurrentMonth()
console.log(days);
createDays(days);

console.log(appointments);

//deselezionare un appuntamento dopo che ne ho premuto un altro

function unselectDay(){
    let selected = document.querySelector(".selected"); // quindi o mi vado a selezionare l'elemento o null
    if(selected){
        selected.classList.remove("selected");
    }
}

//Funzione per vedere gli appuntamenti

function showAppointments(index){
    
    let todayAppointments = appointments[index];//mi vado a leggere l'indice dell'array
    let lista = document.querySelector("#appointmentsList");
    lista.innerHTML=""
    todayAppointments.forEach((ele, i) => {
        let li = document.createElement("li");
        li.innerText = ele;
        lista.appendChild(li);
    });
}

let form = document.querySelector("form");
form.addEventListener("submit",saveMeeting);

function saveMeeting(e) {
    e.preventDefault();

    let meetingTime = document.querySelector("#newMeetingTime");
    let meetingName = document.querySelector("#newMeetingName");
    let meetingDay = document.querySelector("#newMeetingDay").innerText;

    let meetingDayArr = meetingDay.split("/");
    let dayIndex = meetingDayArr[0] - 1;

    let newAppointment = meetingTime.value + " - " + meetingName.value;

    appointments[dayIndex].push(newAppointment);

    console.log(appointments);
    showAppointments(dayIndex);
}

function changeMeetingDay(index){
    let date = document.querySelector("#newMeetingDay");

    date.innerText= (index + 1 ) + " / " + (now.getMonth()+1);
}
