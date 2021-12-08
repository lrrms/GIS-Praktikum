import * as http from "http";
import { listenerCount } from "process";

namespace Server {
    const hostname: string = "127.0.0.1"; //localhost 
    const port: number = 3000; //Port

    const server: http.Server = http.createServer( //server wird definiert
        (request: http.IncomingMessage, response: http.ServerResponse) => {

            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain"); //header welcher typ die response hat 
            response.setHeader("Access-Control-Allow-Origin", "*"); //von wo die response erreichbar ist 

            //Routing
            let url: URL = new URL(request.url || "", `http://${request.headers.host}` );

            switch (url.pathname) { //welcher pfad wird erreicht 
                case "/":
                    response.write("Server erreichbar");
                    break;
                case "/convertDate":
                    let day: any = url.searchParams.get("day");
                    console.log(day);
                    let month: any = url.searchParams.get("month");
                    console.log(month);
                    let year: any = url.searchParams.get("year");
                    console.log(year);
                    response.write("Day: " + day + ", Month: " + month + "Year: " + year);
                    break;

                    default:
                        response.statusCode = 404;
                    
            }
            response.end();
        }
    );

    server.listen(port, hostname, () => { //definiert wo und auf welchen host er lauschen soll
        console.groupCollapsed(`Server running at http://${hostname}:${port}`);
    });

}