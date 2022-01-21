"use strict";
var Client;
(function (Client) {
    console.log("Client läuft"); //Testausgabe
    const url = "http://localhost:3001";
    const path = "/concertEvents";
    const interpret = document.getElementById("interpret");
    const price = document.getElementById("price");
    const myButton = document.querySelector("#macheEtwas");
    myButton.addEventListener("click", myButtonHandler);
    //array fehlt um via GET alle Datensätze zu bekommen 
    // Funktion schreiben, mit der man die Daten beim Laden der Seite abrufen und anzeigen kann 
    async function myButtonHandler(event) {
        let interpret = "Sam Smith"; //Interpret vom Input
        let price = "40"; //Preis vom Input 
        let concertEvent = {
            interpret: interpret,
            price: price
        };
        await send(concertEvent);
    }
    async function send(event) {
        await fetch(url + path, {
            method: "post",
            body: JSON.stringify(event)
        });
    }
    function readFormData() {
        var formData = {};
        formData["interpret"] = document.getElementById("interpret").innerHTML;
        formData["price"] = document.getElementById("price").innerHTML;
        return readFormData;
    }
    async function sendJSONStringWithPOST(url, jsonString) {
        let response = await fetch(url, {
            method: "post",
            body: jsonString
        });
    }
    async function requestInterpret() {
        let response = await fetch(`http://localhost:3001/concertEvents`);
        let text = await response.text();
        console.log(JSON.parse(text));
    }
    async function test() {
        await sendJSONStringWithPOST("http://localhost:3001/concertEvents", JSON.stringify({
            interpret: "Sam Smith",
            price: 40
        }));
        await requestInterpret();
    }
    //test();
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map