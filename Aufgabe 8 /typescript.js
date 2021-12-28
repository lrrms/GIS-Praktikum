"use strict";
var interpret;
(function (interpret) {
    const inputInterpret = document.getElementById("input-interpret");
    const inputPrice = document.getElementById("input-price");
    const display = document.querySelector("#display");
    const button = document.querySelector("#macheEtwas");
    //const deleteButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#löscheEtwas");
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
        display.appendChild(newElement);
        newElement.appendChild(deleteButton);
        deleteButton.addEventListener("click", function () {
            deleteEvent(newElement);
            //geht nur so in klammer 
        });
        //greift auf die funktion zu um diese auszuführen 
    }
    function deleteEvent(parentElement) {
        //void heißt kein Rückgabewert 
        //console.log("deleteEvent wurde aufgerufen!");
        display.removeChild(parentElement);
    }
})(interpret || (interpret = {}));
//# sourceMappingURL=typescript.js.map