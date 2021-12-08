namespace interpret {
    const inputInterpret: HTMLInputElement = <HTMLInputElement> document.getElementById("input-interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement> document.getElementById("input-price");
    //const display: HTMLElement = <HTMLElement> document.querySelector("#display");
    const button: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#macheEtwas");
    const deleteButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#löscheEtwas");
   //const inputFeld: HTMLInputElement = <HTMLInputElement>document.getElementById("input-element");
    const saveButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("save-button");
    const loadButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("load-button");
    const display2: HTMLDivElement = <HTMLDivElement>document.getElementById("display");

    button.addEventListener("click", ButtonHandler);
    
    console.log(inputInterpret);
    console.log(inputPrice); 

    function ButtonHandler(): void {

        let interpretValue: string = inputInterpret.value;
        let priceValue: number = Number(inputPrice.value);

        let newElement: HTMLDivElement =  document.createElement("div");
        let deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.textContent = "Löschen";
//text.Content ist das was man sieht 

        newElement.textContent = interpretValue + "; " + priceValue;
        display2.appendChild(newElement);  

        newElement.appendChild(deleteButton);

        deleteButton.addEventListener("click", function(): void {
            deleteEvent(newElement); 
            //geht nur so in klammer 
        });
        //greift auf die Funktion zu um diese auszuführen 
    }

    function deleteEvent(parentElement: HTMLDivElement): void {
        //void heißt kein Rückgabewert 

        console.log("deleteEvent wurde aufgerufen!");
        display2.removeChild(parentElement);
    }

    saveButton.addEventListener("click", saveButtonHandler);
    loadButton.addEventListener("click", loadButtonHandler);

    function saveButtonHandler(): void {
       // console.log("Save Button clicked");
       // inputInterpret.value; 
       // inputPrice.value; 

        localStorage.setItem("gis_praktikum_input" + inputInterpret.value, inputPrice.value);

    }
    function loadButtonHandler(): void {
        console.log("Load Button clicked");
        let valueFromLocalStorage: string = localStorage.getItem("gis_praktikum_input"); //(inputInterpret, inputPrice);
        console.log(valueFromLocalStorage);
        display2.textContent = valueFromLocalStorage; 
    }        

}