//import { request } from "http";
//import * as mongo from "mongodb";

namespace Client {
    console.log("Client läuft"); //Testausgabe
    const url: string = "http://127.0.0.1:3000"; 
    const path: string = "/concertEvents";

   //const inputInterpret: HTMLInputElement = <HTMLInputElement> document.getElementById("input-interpret");
   // const inputPrice: HTMLInputElement = <HTMLInputElement> document.getElementById("input-price");
   // const myButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#macheEtwas");

    //myButton.addEventListener("click, MyButtonHandler");

   // function myButtonHandler(): void { 
    //    let interpretValue: string = inputInterpret.value;
     //   let priceValue: number = Number(inputPrice.value);

   // }
    
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
            `http://localhost:3000/concertEvents`
        );
        let text: string = await response.text();
        console.log(JSON.parse(text));
    }

    async function test() {
        await sendJSONStringWithPOST(
            "http://localhost:3000/concertEvents", 
            JSON.stringify({
                interpret: "Sam Smith",
                price: 40
                
            })
        );
        await requestInterpret();
    }
    test();
}