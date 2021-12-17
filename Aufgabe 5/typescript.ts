namespace interpret {
    const inputInterpret: HTMLInputElement = <HTMLInputElement> document.getElementById("input-interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement> document.getElementById("input-price");
    //const display: HTMLElement = <HTMLElement> document.querySelector("#display");
    const button: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#macheEtwas");
    const deleteButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#löscheEtwas");
   //const inputFeld: HTMLInputElement = <HTMLInputElement>document.getElementById("input-element");
    //const saveButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("save-button");
    const loadButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("load-button");
    const display2: HTMLDivElement = <HTMLDivElement>document.getElementById("display");

    button.addEventListener("click", buttonHandler);
    
    console.log(inputInterpret);
    console.log(inputPrice); 

    const array: any[] = [];

    function buttonHandler(): void {

        let interpretValue: string = inputInterpret.value;
        let priceValue: number = Number(inputPrice.value);

        let newElement: HTMLDivElement =  document.createElement("div");
        let deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.textContent = "Löschen";

        //text.Content ist das was man sieht 

        array.push([interpretValue, priceValue]);
        
        localStorage.setItem("gis_praktikum_input", JSON.stringify(array));

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

    
    loadButton.addEventListener("click", loadButtonHandler);


    function loadButtonHandler(): void {
        console.log("Load Button clicked");
        let valueFromLocalStorage: string = localStorage.getItem("gis_praktikum_input"); 
        console.log(valueFromLocalStorage);
        display2.textContent = valueFromLocalStorage; 
    } 
    
    loadButtonHandler();

}// in tabelle und lösch button 