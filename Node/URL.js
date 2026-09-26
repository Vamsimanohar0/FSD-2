const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end("Home Page");
    }
    else if (req.url == '/about') {
        res.end("About Page");
    }
    else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }
}); 

// Start listening on port 8080
server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});