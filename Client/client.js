"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client;
(function (Client) {
    console.log("Client läuft"); //Testausgabe
    const url = "http://127.0.0.1:3000";
    const path = "/convertDate";
    const myForm = document.getElementById("myform");
    const sendButton = document.getElementById("send-button");
    //const addElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("add");
    //const dateInput: HTMLButtonElement = <HTMLInputElement>document.getElementById("date");
    sendButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        sendForm();
    });
    /*
       async function sendFormServer(): Promise<void> {
           let response: Response = await fetch(url);
           let responseText: string = await response.text();
           addElement.innerText = responseText;
       }*/
    console.log(myForm, sendButton);
    async function sendForm() {
        let formData = new FormData(myForm);
        let query = new URLSearchParams(formData); //Get Parameter vorbereiten
        let urlWithQuery = url + path + "?" + query.toString();
        //console.log(urlWithQuery);
        let response = await fetch(urlWithQuery);
        let responseText = await response.text();
        console.log(responseText);
        document.getElementById("response").innerText = responseText;
        //addElement.innerText = responseText;
    }
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map