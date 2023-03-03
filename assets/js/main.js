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

// function to select all elements of the same class and adding a click event
function showColour(element) {
    const buttonSelect = document.querySelectorAll(element);

    buttonSelect.forEach(element => {
        element.addEventListener("click", () => {
                element.classList.toggle("blue");
                console.log(element.innerText);
            })
        })
};

// Reset function
function resetGame() {
    ctnBoard.innerHTML= "";
}

// function to create the game board
function createBoard (cellNumber) {
        for (let i = 1; i <= cellNumber; i++) {
            const createdElement = createElement("div", "game-cell", i);
            createdElement.classList.add("cell-"+`${cellNumber}`)
            ctnBoard.append(createdElement);
    }
    showColour(".game-cell");
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
