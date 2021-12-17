"use strict";
var interpret;
(function (interpret) {
    const inputInterpret = document.getElementById("input-interpret");
    const inputPrice = document.getElementById("input-price");
    //const display: HTMLElement = <HTMLElement> document.querySelector("#display");
    const button = document.querySelector("#macheEtwas");
    const deleteButton = document.querySelector("#löscheEtwas");
    //const inputFeld: HTMLInputElement = <HTMLInputElement>document.getElementById("input-element");
    //const saveButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("save-button");
    const loadButton = document.getElementById("load-button");
    const display2 = document.getElementById("display");
    button.addEventListener("click", buttonHandler);
    console.log(inputInterpret);
    console.log(inputPrice);
    const array = [];
    function buttonHandler() {
        let interpretValue = inputInterpret.value;
        let priceValue = Number(inputPrice.value);
        let newElement = document.createElement("div");
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Löschen";
        //text.Content ist das was man sieht 
        array.push([interpretValue, priceValue]);
        localStorage.setItem("gis_praktikum_input", JSON.stringify(array));
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
    loadButton.addEventListener("click", loadButtonHandler);
    function loadButtonHandler() {
        console.log("Load Button clicked");
        let valueFromLocalStorage = localStorage.getItem("gis_praktikum_input");
        console.log(valueFromLocalStorage);
        display2.textContent = valueFromLocalStorage;
    }
    loadButtonHandler();
})(interpret || (interpret = {})); // in tabelle und lösch button 
//# sourceMappingURL=typescript.js.map