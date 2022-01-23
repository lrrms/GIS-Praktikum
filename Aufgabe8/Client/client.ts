
namespace Client {
    const myButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("myButton");
    const interpretInput: HTMLInputElement = <HTMLInputElement>document.getElementById("interpret");
    const priceInput: HTMLInputElement = <HTMLInputElement>document.getElementById("price");
    const tabelle: HTMLElement = <HTMLElement>document.getElementById("tabelle");   

    const url: string = "http://127.0.0.1:3001"; 
    const path: string = "/concertEvents";
    
    console.log(myButton);

    interface Reihe {
        interpret: string; 
        price: string; 
    }
    
    let eventFromServer: Reihe[] = [];

    window.addEventListener("load", () => {
        getData();
    });

    myButton.addEventListener("click", myButtonHandler);


    async function getData(): Promise<void> {
        let response: Response = await fetch(url + path);
        let responseText: string = await response.text();
        console.log(responseText);
        eventFromServer = JSON.parse(responseText);
        console.log(eventFromServer);

        for ( let i: number = 0; i < eventFromServer.length; i++) {
            createTabelle(eventFromServer[i].interpret, eventFromServer[i].price);
        }
    }

    async function myButtonHandler(event: Event): Promise <void> {
        
        event.preventDefault();

        let konzert: Reihe = {
            interpret: interpretInput.value,
            price: priceInput.value
        };

        console.log(konzert);
        createTabelle(konzert.interpret, konzert.price);
        sendJSONStringWithPOST(url + path, JSON.stringify(konzert));

    
    }

    async function sendJSONStringWithPOST(
        url: RequestInfo,
        jsonString: string
        ): Promise <void> {
        let response: Response = await fetch (url, {
            method: "POST",
            body: jsonString
        });
    }
   /* 
    async function requestInterpret(): Promise<void> {
        let response: Response = await fetch (
            `http://localhost:3001/concertEvents`
        );
        let text: string = await response.text();
        console.log(JSON.parse(text));
        }

    }*/
    function createTabelle(interpretWert: string, priceWert: string): void {
        
        let tr: HTMLElement = document.createElement("tr");
        let interpret: HTMLElement = document.createElement("td");
        let price: HTMLElement = document.createElement("td");
       

        interpret.textContent = interpretWert;
        price.textContent = priceWert;

        tabelle.appendChild(tr);
        tr.setAttribute("id", "row-");
        tr.appendChild(interpret);
        tr.appendChild(price);

    }
}