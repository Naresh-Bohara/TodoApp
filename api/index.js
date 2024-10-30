import http from "http";
import  dotenv  from "dotenv";
import application from "./src/config/express.config.js";

dotenv.config();

let port = process.env.PORT || 9005;
let host = process.env.HOST || "127.0.0.1";

const appServer = http.createServer(application);

appServer.listen(port, host, (error)=>{
    if(!error){
        console.log("server is running on port: ", port);
        console.log("Press CTRL + C to disconnect server.");
    }else{
        console.log(error)
    }
})