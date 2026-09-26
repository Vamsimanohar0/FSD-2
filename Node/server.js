const http = require("http");

http.createServer((req,res) =>{
    res.write("Hello World");
    res.end();
    console.log("Server is running ....");
}).listen(8000)