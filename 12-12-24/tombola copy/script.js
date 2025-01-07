const numeriTombola = 76;
const mainBoardNum = [];
let intervalId; // Variabile per memorizzare l'ID dell'intervallo

function createMainBoard(num) {
    let mainBoard = document.querySelector("#main-board");

    for (let i = 0; i < num; i++) {
        let div = document.createElement("div");
        div.classList.add("cella");
        div.innerText = i + 1;
        mainBoard.appendChild(div);
    }
}

function generateRandomNumber(num) {
    // Genera un numero casuale compreso tra 1 e num
    let numRand = Math.floor(Math.random() * num) + 1;

    // Verifica se l'estrazione è completa
    if (mainBoardNum.length === num) {
        alert("Estrazione completata!");
        clearInterval(intervalId); // Ferma l'intervallo
        return;
    }

    // Verifica se il numero è già stato estratto
    if (!mainBoardNum.includes(numRand)) {
        mainBoardNum.push(numRand);

        let cells = document.querySelectorAll("#main-board div.cella");
        console.log("Numero generato:", numRand);

        // Applica la classe solo se l'indice è valido
        cells[numRand - 1].classList.add("estratto");
    } else {
        console.log(numRand + " già estratto");
        generateRandomNumber(num); // Ricorsione per generare un nuovo numero
    }
}

createMainBoard(numeriTombola);

// Bottone per avviare l'estrazione automatica
let btnRand = document.querySelector("#randBtn");
btnRand.addEventListener("click", () => {
    // Avvia l'intervallo solo se non è già attivo
    if (!intervalId) {
        intervalId = setInterval(() => generateRandomNumber(numeriTombola), 100);
    }
});
