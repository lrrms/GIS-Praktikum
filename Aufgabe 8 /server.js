"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http"); //Http modul importieren 
//import { listenerCount } from "process";
const mongo = require("mongodb");
var Server;
(function (Server) {
    const hostname = "127.0.0.1"; //localhost 
    const port = 3000; //Port auf dem der Server laufen soll 
    const mongoUrl = "mongodb://localhost:27017"; //für lokale Mongodb
    let mongoClient = new mongo.MongoClient(mongoUrl);
    //mongoClient open und close 
    async function dbFind(db, collection, requestObject, response) {
        let result = await mongoClient
            .db(db)
            .collection(collection)
            .find(requestObject)
            .toArray();
        response.setHeader("Content-Type", "application/json");
        response.write(JSON.stringify(result));
    }
    const server = http.createServer(//server wird definiert
    async (request, response) => {
        response.statusCode = 200; //status wird definiert wenn feheler auftritt 
        response.setHeader("Content-Type", "text/plain"); //Rückgabetyp wird definiert 
        response.setHeader("Access-Control-Allow-Origin", "*"); //von wo der Rückgabetyp erreichbar ist 
        //Routing der verschiedenen Pfade
        let url = new URL(request.url || "", `http://${request.headers.host}`);
        switch (url.pathname) { //welcher Pfad wird erreicht 
            case "/":
                response.write("Server erreichbar");
                break;
            case "/concertEvents": //Pfad 
                await mongoClient.connect();
                switch (request.method) {
                    case "GET":
                        await dbFind(//sucht in der Datenbank nach 
                        "künstler", "preis", {
                        //konzertNr: Number(url.searchParams.get("konzertNr")) 
                        }, response);
                        break;
                }
                break;
            case "POST":
                let jsonString = "";
                request.on("data", data => {
                    jsonString += data;
                });
                request.on("end", async () => {
                    mongoClient
                        .db("konzerte")
                        .collection("künstler")
                        .insertOne(JSON.parse(jsonString));
                });
                break;
            default:
                response.statusCode = 404;
        }
        response.end();
    });
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`);
    });
})(Server || (Server = {}));
//# sourceMappingURL=server.js.map