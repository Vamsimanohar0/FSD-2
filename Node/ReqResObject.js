const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
 
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
     res.end("Response sent");
});
// Start the server on port 3000
server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});