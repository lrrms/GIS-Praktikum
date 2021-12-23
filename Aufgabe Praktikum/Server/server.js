"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http"); //Http modul inportieren 
var Server;
(function (Server) {
    const hostname = "127.0.0.1"; //localhost 
    const port = 3000; //Port auf dem der Server laufen soll 
    const server = http.createServer(//server wird definiert
    (request, response) => {
        response.statusCode = 200; //status wird definiert 
        response.setHeader("Content-Type", "text/plain"); //Rückgabetyp wird definiert 
        response.setHeader("Access-Control-Allow-Origin", "*"); //von wo der Rückgabetyp erreichbar ist 
        //Routing der verschiedenen Pfade
        let url = new URL(request.url || "", `http://${request.headers.host}`);
        switch (url.pathname) { //welcher Pfad wird erreicht 
            case "/":
                response.write("Server erreichbar");
                break;
            case "/convertDate":
                let date = url.searchParams.get("date");
                console.log(date);
                response.write("Day: " + date.getDay() + "; Month: " + date.getMonth() + " ; Year" + date.getFullYear());
                break;
            default:
                response.statusCode = 404;
        }
        response.end();
    });
    server.listen(port, hostname, () => {
        //console.log('Server running at http://127.0.0.1:3000');
        console.groupCollapsed(`Server running at http://${hostname}:${port}`);
    });
})(Server || (Server = {}));
//# sourceMappingURL=server.js.map