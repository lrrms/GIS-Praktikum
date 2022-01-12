"use strict";
//import { request } from "http";
//import * as mongo from "mongodb";
var Client;
(function (Client) {
    console.log("Client läuft"); //Testausgabe
    const url = "http://127.0.0.1:3000";
    const path = "/concertEvents";
    //const inputInterpret: HTMLInputElement = <HTMLInputElement> document.getElementById("input-interpret");
    // const inputPrice: HTMLInputElement = <HTMLInputElement> document.getElementById("input-price");
    // const myButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#macheEtwas");
    //myButton.addEventListener("click, MyButtonHandler");
    // function myButtonHandler(): void { 
    //    let interpretValue: string = inputInterpret.value;
    //   let priceValue: number = Number(inputPrice.value);
    // }
    function readFormData() {
        var formData = {};
        formData["künstler"] = document.getElementById("künstler").innerHTML;
        formData["preis"] = document.getElementById("preis").innerHTML;
        return readFormData;
    }
    async function sendJSONStringWithPOST(url, jsonString) {
        let response = await fetch(url, {
            method: "post",
            body: jsonString,
        });
    }
    async function requestKünstler() {
        let response = await fetch(`http://localhost:3000/concertEvents`);
        let text = await response.text();
        console.log(JSON.parse(text));
    }
    async function test() {
        await sendJSONStringWithPOST("http://localhost:3000/concertEvents", JSON.stringify({
            künstler: "Sam Smith",
            price: 40,
        }));
        await requestKünstler();
    }
    test();
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map