import http from "http";
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'Application/json' })
    res.end(JSON.stringify({
        data: "Hello World"
    }));
});
server.listen(3000, () => {
    console.log("Server is running in http://localhost:3000")
});