"use strict";
var interpret;
(function (interpret) {
    const inputInterpret = document.getElementById("input-interpret");
    const inputPrice = document.getElementById("input-price");
    //const display: HTMLElement = <HTMLElement> document.querySelector("#display");
    const button = document.querySelector("#macheEtwas");
    const deleteButton = document.querySelector("#löscheEtwas");
    //const inputFeld: HTMLInputElement = <HTMLInputElement>document.getElementById("input-element");
    const saveButton = document.getElementById("save-button");
    const loadButton = document.getElementById("load-button");
    const display2 = document.getElementById("display");
    button.addEventListener("click", ButtonHandler);
    console.log(inputInterpret);
    console.log(inputPrice);
    function ButtonHandler() {
        let interpretValue = inputInterpret.value;
        let priceValue = Number(inputPrice.value);
        let newElement = document.createElement("div");
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Löschen";
        //text.Content ist das was man sieht 
        newElement.textContent = interpretValue + "; " + priceValue;
        display2.appendChild(newElement);
        newElement.appendChild(deleteButton);
        deleteButton.addEventListener("click", function () {
            deleteEvent(newElement);
            //geht nur so in klammer 
        });
        //greift auf die Funktion zu um diese auszuführen 
    }
    function deleteEvent(parentElement) {
        //void heißt kein Rückgabewert 
        console.log("deleteEvent wurde aufgerufen!");
        display2.removeChild(parentElement);
    }
    saveButton.addEventListener("click", saveButtonHandler);
    loadButton.addEventListener("click", loadButtonHandler);
    function saveButtonHandler() {
        // console.log("Save Button clicked");
        // inputInterpret.value; 
        // inputPrice.value; 
        localStorage.setItem(inputInterpret.value, inputPrice.value);
    }
    function loadButtonHandler() {
        console.log("Load Button clicked");
        let valueFromLocalStorage = localStorage.getItem(inputInterpret); //, inputPrice);
        console.log(valueFromLocalStorage);
        display2.textContent = valueFromLocalStorage;
    }
})(interpret || (interpret = {}));
//# sourceMappingURL=typescript.js.map