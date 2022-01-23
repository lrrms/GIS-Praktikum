import * as http from "http"; //Http modul importieren 
import * as mongo from "mongodb";

namespace Server { 
    const hostname: string = "127.0.0.1"; //localhost 
    const port: number = 3001; //Port auf dem der Server laufen soll 
    const mongoUrl: string = "mongodb://127.0.0.1:27017"; //für lokale Mongodb

    //let mongoClient: mongo.MongoClient = new mongo.MongoClient(mongoUrl);
    const mongoClient = new mongo.MongoClient(mongoUrl, {
        connectTimeoutMS: 0,
        serverSelectionTimeoutMS: 0
        }); //Funktion vom Praktikum (Philip) -> hat sonst nicht funktioniert 

    async function dbFind(
        db: string,
        collection: string,
        requestObject: any,
        response: http.ServerResponse
    ) {
        let result: any = await mongoClient
            .db(db)
            .collection(collection)
            .find(requestObject)
            .toArray();

        response.setHeader("Content-Type", "application/json"); //json format wird zurückgesendet 
        response.write(JSON.stringify(result));

    }

    const server: http.Server = http.createServer( //server wird definiert
        async (request: http.IncomingMessage, response: http.ServerResponse) => {

            response.statusCode = 200; //status wird definiert wenn feheler auftritt 
            response.setHeader("Access-Control-Allow-Origin", "*"); //von wo der Rückgabetyp erreichbar ist 
            response.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");

            //Routing der verschiedenen Pfade
            let url: URL = new URL(request.url || "", `http://${request.headers.host}`);

            switch (url.pathname) { //welcher Pfad wird erreicht 
                case "/":
                    response.write("Server erreichbar");
                    break;

                case "/concertEvents": //Pfad 
                    await mongoClient.connect();
                    switch (request.method) {
                        case "GET":
                            await dbFind(
                                "konzert",
                                "konzert-Events",
                                {
                                },
                                response
                            );
                            break;

                        case "POST":
                            let jsonString: string = "";
                            request.on("data", data => {
                                jsonString += data;
                            });
                            request.on("end", async () => { //Pfeil deklariert die Funktion 
                                //console.log(jsonString);
                                mongoClient
                                    .db("konzert")
                                    .collection("konzert-Events")
                                    .insertOne(JSON.parse(jsonString));
                                });
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

