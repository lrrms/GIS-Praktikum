import { request } from "http";

namespace Client {
    console.log("Client läuft"); //Testausgabe

    const url: string = "http://127.0.0.1:3000"; 
    const path: string = "/convertDate";


    const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("myform");
    const sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button");
    //const addElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("add");
    //const dateInput: HTMLButtonElement = <HTMLInputElement>document.getElementById("date");


    sendButton.addEventListener("click", function (evt: Event) {
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
    

    async function sendForm(): Promise<void> {
        let formData: FormData = new FormData(myForm);
        let query: URLSearchParams = new URLSearchParams(<any>formData); //Get Parameter vorbereiten
        let urlWithQuery: string = url + path + "?" + query.toString();
        //console.log(urlWithQuery);

        let response: Response = await fetch(urlWithQuery);
        let responseText: string = await response.text();
        console.log(responseText); 
        document.getElementById("response").innerText  = responseText;
        //addElement.innerText = responseText;

    }
}
    