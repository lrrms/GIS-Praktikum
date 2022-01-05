"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client;
(function (Client) {
    console.log("Client läuft"); //Testausgabe
    const url = "http://127.0.0.1:3000";
    const path = "/convertEvents";
    async function sendJSONStringWithPOST(url, jsonString) {
        let response = await fetch(url, {
            method: "post",
            body: jsonString,
        });
    }
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map