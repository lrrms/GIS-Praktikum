//import { request } from "http";
//import * as mongo from "mongodb";

namespace Client {
    console.log("Client läuft"); //Testausgabe
    const url: string = "http://127.0.0.1:3000"; 
    const path: string = "/convertEvents";

    const inputInterpret: HTMLInputElement = <HTMLInputElement> document.getElementById("input-interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement> document.getElementById("input-price");
    const myButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#macheEtwas");

    //myButton.addEventListener("click, MyButtonHandler");

    function myButtonHandler(): void { 
        let interpretValue: string = inputInterpret.value;
        let priceValue: number = Number(inputPrice.value);

    }

    async function sendJSONStringWithPOST(
        url: RequestInfo, 
        jsonString: string 
    ): Promise<void> {
        let response: Response = await fetch (url, {
            method: "post",
            body: jsonString, 
        });
    }
    async function requestConcertEvent(konzertNr: number): Promise<void> {
        let response: Response = await fetch(
            `http://localhost:3000/konzert?konzertNr=${konzertNr}`
        );
        let text: string = await response.text();
        console.log(JSON.parse(text));
    }

    async function requestConcertEvents(): Promise<void> {
        let response: Response = await fetch("http://localhost:3000/concertEvents");
        let text: string = await response.text();
        console.log(JSON.parse(text));
    }

    //async function Load(): promise void {
        

    //}
    //let collection: mongo.Collection = mongoClient.db("konzerteDatenbank").collection("konzerte");
       // await collection.insert({...});
       // console.log(await Collection.find({...}).toArray):
}



