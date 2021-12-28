import * as http from "http"; //Http modul inportieren 
import { listenerCount } from "process";

namespace Server {
    const hostname: string = "127.0.0.1"; //localhost 
    const port: number = 3000; //Port auf dem der Server laufen soll 

    const server: http.Server = http.createServer( //server wird definiert
        (request: http.IncomingMessage, response: http.ServerResponse) => {

            response.statusCode = 200; //status wird definiert 

            response.setHeader("Content-Type", "text/plain"); //Rückgabetyp wird definiert 
            response.setHeader("Access-Control-Allow-Origin", "*"); //von wo der Rückgabetyp erreichbar ist 

            //Routing der verschiedenen Pfade
            let url: URL = new URL(request.url || "", `http://${request.headers.host}` );
            

            switch (url.pathname) { //welcher Pfad wird erreicht 
                case "/":
                    response.write("Server erreichbar");
                    break;

                case "/convertDate":

                    //let date: any = new Date (url.searchParams.get("date"));

                    let date: any = new Date (url.searchParams.get("date").toString());
                    console.log(date);

                    response.write("Day: " + date.getDay() + "; Month: " + date.getMonth() + " ; Year: " + date.getFullYear());
                    
                    break;

                    default:
                        response.statusCode = 404;
            }
            response.end();
        }
    );

    server.listen(port, hostname, () => { //definiert wo und auf welchen host er lauschen soll
        //console.log('Server running at http://127.0.0.1:3000');
        console.groupCollapsed(`Server running at http://${hostname}:${port}`);
    });


}