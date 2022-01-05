import * as http from "http"; //Http modul inportieren 
//import { listenerCount } from "process";

import * as mongo from "mongodb"; 

namespace Server { //namespace müssen gleich sein
    const hostname: string = "127.0.0.1"; //localhost 
    const port: number = 3000; //Port auf dem der Server laufen soll 
    const mongoUrl: string = "mongodb://localhost:27017"; //für lokale Mongodb

    let mongoClient: mongo.MongoClient = new mongo.MongoClient(mongoUrl);

    //mongoClient open und close 

    async function dbFind(
        db: string, 
        collection: string, 
        requestObject: any,
        response: http.ServerResponse
    ){
        let result = await mongoClient
        .db(db)
        .collection(collection)
        .find(requestObject)
        .toArray();
        
        response.setHeader("Content-Type", "application/json");
        response.write(JSON.stringify(result));
    
    }
    
    const server: http.Server = http.createServer( //server wird definiert
        async (request: http.IncomingMessage, response: http.ServerResponse) => {

            response.statusCode = 200; //status wird definiert wenn feheler auftritt 
            response.setHeader("Content-Type", "text/plain"); //Rückgabetyp wird definiert 
            response.setHeader("Access-Control-Allow-Origin", "*"); //von wo der Rückgabetyp erreichbar ist 

            //Routing der verschiedenen Pfade
            let url: URL = new URL(request.url || "", `http://${request.headers.host}` );

            switch (url.pathname) { //welcher Pfad wird erreicht 
                case "/":
                    response.write("Server erreichbar");
                    break;

                case "/concertEvent": //Pfad 
                    await mongoClient.connect();
                    switch (request.method) {
                        case "GET": 
                        await dbFind( //sucht in der Datenbank nach 
                            "konzertDatenbank",
                            "konzert",
                            {
                                konzertNr: Number(url.searchParams.get("konzertNr"))                  
                            },
                            response 
                            
                        ); 
                        break;

                        case "POST":
                            let jsonString = "";
                            request.on("data", data => {
                                jsonString += data;

                            });
                            request.on("end", async () => { //Pfeil deklariert die Funktion 
                                mongoClient
                                .db("konzertDatenbank")
                                .collection("konzert") 
                                .insertOne(JSON.parse(jsonString));
                            });
                        break;
                            
                    }

                case "/concertEvents":
                    await mongoClient.connect();
                    switch (http.request.method) {
                        case "GET":
                            await dbFind("konzerteSammlung", "konzert", {}, response);
                            break;
                    }
                default:
                    response.statusCode = 404;
            }
            response.end();
        }
    );
    server.listen(port, hostname, () => {   //definiert wo und auf welchen host er lauschen soll
        console.log(`Server running at http://${hostname}:${port}`);
    });
}

