
namespace Client {
    console.log("Client läuft"); //Testausgabe
    const url: string = "http://127.0.0.1:3001"; 
    const path: string = "/concertEvents";

   const interpretInput: HTMLInputElement = <HTMLInputElement> document.getElementById("interpret");
   const priceInput: HTMLInputElement = <HTMLInputElement> document.getElementById("price");
   const myButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#macheEtwas");

    myButton.addEventListener("click", (event) => {
        event.preventDefault();
        myButtonHandler(event);

    });

    interface ConcertEvent {
        interpret: string; 
        price: string; 

    }

    //array fehlt um via GET alle Datensätze zu bekommen 
    // Funktion schreiben, mit der man die Daten beim Laden der Seite abrufen und anzeigen kann 

    async function myButtonHandler(event: Event): Promise <void> {
        let interpret: string = interpretInput.value; //Interpret vom Input
        let price: string  = priceInput.value; //Preis vom Input 
        let concertEvent: ConcertEvent = {
            interpret: interpret, 
            price: price
        };
        console.log(concertEvent);
        await send(concertEvent);
    }

    async function send(event: ConcertEvent): Promise <void> {
        await fetch(url + path, {
            method: "POST",
            body: JSON.stringify(event)
        });

    }

    function readFormData() {
        var formData: any = {};
        formData["interpret"] = document.getElementById("interpret").innerHTML;
        formData["price"] = document.getElementById("price").innerHTML;
        return readFormData;
    }

    async function sendJSONStringWithPOST(
        url: RequestInfo, 
        jsonString: string 
    ): Promise<void> {
        let response: Response = await fetch (url, {
            method: "post",
            body: jsonString 
        });
    }
    async function requestInterpret(): Promise<void> {
        let response: Response = await fetch(
            `http://localhost:3001/concertEvents`
        );
        let text: string = await response.text();
        console.log(JSON.parse(text));
    }

    async function test() {
        await sendJSONStringWithPOST(
            "http://localhost:3001/concertEvents", 
            JSON.stringify({
                interpret: "Sam Smith",
                price: 40
                
            })
        );
        await requestInterpret();
    }
    //test();
}