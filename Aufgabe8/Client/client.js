"use strict";
var Client;
(function (Client) {
    const myButton = document.getElementById("myButton");
    const interpretInput = document.getElementById("interpret");
    const priceInput = document.getElementById("price");
    const tabelle = document.getElementById("tabelle");
    const url = "http://127.0.0.1:3001";
    const path = "/concertEvents";
    console.log(myButton);
    let eventFromServer = [];
    window.addEventListener("load", () => {
        getData();
    });
    async function getData() {
        let response = await fetch(url + path);
        let responseText = await response.text();
        console.log(responseText);
        eventFromServer = JSON.parse(responseText);
        console.log(eventFromServer);
        for (let i = 0; i < eventFromServer.length; i++) {
            createTabelle(eventFromServer[i].interpret, eventFromServer[i].price);
        }
    }
    async function myButtonHandler(event) {
        event.preventDefault();
        let konzert = {
            interpret: interpretInput.value,
            price: priceInput.value
        };
        console.log(konzert);
        createTabelle(konzert.interpret, konzert.price);
        sendJSONStringWithPOST(url + path, JSON.stringify(konzert));
    }
    async function sendJSONStringWithPOST(url, jsonString) {
        let response = await fetch(url, {
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
    function createTabelle(interpretWert, priceWert) {
        let tr = document.createElement("tr");
        let interpret = document.createElement("td");
        let price = document.createElement("td");
        interpret.textContent = interpretWert;
        price.textContent = priceWert;
        tabelle.appendChild(tr);
        tr.setAttribute("id", "row-");
        tr.appendChild(interpret);
        tr.appendChild(price);
    }
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map