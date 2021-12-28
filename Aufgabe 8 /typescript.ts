namespace interpret {
    const inputInterpret: HTMLInputElement = <HTMLInputElement> document.getElementById("input-interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement> document.getElementById("input-price");
    const display: HTMLElement = <HTMLElement> document.querySelector("#display");
    const button: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#macheEtwas");
    //const deleteButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#löscheEtwas");

    button.addEventListener("click", ButtonHandler);
    
    console.log(inputInterpret);
    console.log(inputPrice); 

    function ButtonHandler(): void {

        let interpretValue: string = inputInterpret.value;
        let priceValue: number = Number(inputPrice.value);

        let newElement: HTMLDivElement = document.createElement("div");
        let deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.textContent = "Löschen";
//text.Content ist das was man sieht 

        newElement.textContent = interpretValue + "; " + priceValue;
        
        display.appendChild(newElement);  

        newElement.appendChild(deleteButton);

        deleteButton.addEventListener("click", function(): void {
            deleteEvent(newElement); 
            //geht nur so in klammer 
        });
        //greift auf die funktion zu um diese auszuführen 
    }

    function deleteEvent(parentElement: HTMLDivElement): void {
        //void heißt kein Rückgabewert 

        //console.log("deleteEvent wurde aufgerufen!");
        display.removeChild(parentElement);
    }

}