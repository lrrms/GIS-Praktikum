"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client;
(function (Client) {
    console.log("Client läuft"); //Testausgabe
    const url = "http://127.0.0.1:3000";
    const path = "/convertDate";
    //const content = addElement.innerHTML;
    //const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("myform");
    const sendButton = document.getElementById("send-button");
    const addElement = document.getElementById("add");
    const dateInput = document.getElementById("date");
    //const serverButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("date");
    sendButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        sendForm();
    });
    /* serverButton.addEventListener("click", function (evt: Event){
         evt.preventDefault();
         sendFormServer();
 
     });
 
     async function sendFormServer(): Promise<void> {
         let response: Response = await fetch(url);
         let responseText: string = await response.text();
         addElement.innerText = responseText;
     }*/
    //console.log(myForm, sendButton);
    async function sendForm() {
        //let formData: FormData = new FormData(myForm);
        //let query: URLSearchParams = new URLSearchParams(<any>formData); //Get Parameter vorbereiten
        let urlWithQuery = url + path + "?b=" + JSON.stringify(new Date(dateInput.value));
        //let urlWithQuery: string = url + path + "?" + query.toString();
        console.log(urlWithQuery);
        let response = await fetch(urlWithQuery);
        let responseText = await response.text();
        console.log(responseText);
        addElement.innerText = responseText;
    }
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map