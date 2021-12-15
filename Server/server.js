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
                //let day: any = url.searchParams.get("day");
                //console.log(day);
                //let month: any = url.searchParams.get("month");
                //console.log(month);
                //let year: any = url.searchParams.get("year");
                //console.log(year);
                // response.write("Day: " + day + ", Month: " + month + "Year: " + year);
                let date = url.searchParams.get("date");
                console.log(date);
                response.write("Day: " + date + ", Month: " + date + "Year: " + date);
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