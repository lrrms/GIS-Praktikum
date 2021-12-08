"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
var Server;
(function (Server) {
    const hostname = "127.0.0.1"; //localhost 
    const port = 3000; //Port
    const server = http.createServer(//server wird definiert
    (request, response) => {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain"); //header welcher typ die response hat 
        response.setHeader("Access-Control-Allow-Origin", "*"); //von wo die response erreichbar ist 
        //Routing
        let url = new URL(request.url || "", `http://${request.headers.host}`);
        switch (url.pathname) { //welcher pfad wird erreicht 
            case "/":
                response.write("Server erreichbar");
                break;
            case "/convertDate":
                let day = url.searchParams.get("day");
                console.log(day);
                let month = url.searchParams.get("month");
                console.log(month);
                let year = url.searchParams.get("year");
                console.log(year);
                response.write("Day: " + day + ", Month: " + month + "Year: " + year);
                break;
            default:
                response.statusCode = 404;
        }
        response.end();
    });
    server.listen(port, hostname, () => {
        console.groupCollapsed(`Server running at http://${hostname}:${port}`);
    });
})(Server || (Server = {}));
//# sourceMappingURL=server.js.map