'use strict';

/*************
 * FUNZIONI
 *************/

// function to create an element with a class
function createElement(htmlElement, className, innerContent) {
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = innerContent;

    return element;
}

function showColour(element, cellNumber) {
    const buttonSelect = document.querySelectorAll(element); // slelects all game cells

    let bombList = [];
    // Generates a random number and pushes it in bombList
    while (bombList.length < 16) {
        let numGen = randomGenerator(cellNumber);

        if (bombList.includes(numGen) === true) {
            continue;
        } else {
            bombList.push(numGen);
        }
    }

    console.log(bombList); // list of bomb generated

    // Loop to check where are the bombs with event related when you click to find out
    for (let i = 0; i < buttonSelect.length; i++) {
        let innerContent = buttonSelect[i].innerText;

        if (bombList.includes(Number(innerContent))) {
            buttonSelect[i].addEventListener("click", showBomb, true) 
            function showBomb() {
                buttonSelect[i].classList.add("bomb");
                console.log(innerContent);
                // if (showBomb === true) {
                //     buttonSelect.removeEventListener("click", showBomb, true);
                // }
        }} else {
            buttonSelect[i].addEventListener("click", () => {
                buttonSelect[i].classList.add("blue");
                console.log(innerContent);
            })
        }  
    } 
}


// Reset function
function resetGame() {
    ctnBoard.innerHTML= "";
}

// Generates a random number based on cellNumber
function randomGenerator(cellNumber) {
    const randomNum = Math.floor((Math.random() * cellNumber) + 1);
    return randomNum;
}

// function to create the game board
function createBoard (cellNumber) {
        for (let i = 1; i <= cellNumber; i++) {
            const createdElement = createElement("div", "game-cell", i);
            createdElement.classList.add("cell-"+`${cellNumber}`)
            ctnBoard.append(createdElement);
    }
    showColour(".game-cell", cellNumber);
}

function campoMinato() {
    resetGame();

    const selectMode = document.getElementById("difficulty"); // selects html select
    let selectModeValue = selectMode.value; // selects html select value

    let cellNumber;
    let level = selectModeValue;

    switch(level) {

        case "medium" :
            cellNumber = 81;
            break;

        case "hard" :
            cellNumber = 49;
            break;

        default:
            cellNumber = 100;
            break;
    }
    createBoard(cellNumber);
}

/*************
 * MAIN
 *************/

const ctnBoard = document.querySelector(".game-board"); // selects container
const playBtn = document.querySelector(".play"); // selects play button
const resetBtn = document.querySelector(".reset"); // selects play button

playBtn.addEventListener('click', campoMinato); // starts game
resetBtn.addEventListener("click", resetGame); // resets game



/*************
 * LOGICA
 *************/

// Superbonus 1

// Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
// Superbonus 2

// Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.
