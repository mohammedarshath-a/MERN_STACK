import http from "http";
import url  from "url";

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    if (parseUrl.pathname === '/' && req.method === "GET") {
        res.writeHead(200, { "content-type": "text.html" });
        res.end("<h1>ERODE SENGUNTHAR ENGINEERING COLLEGE</h1>")
    }
    else if (parseUrl.pathname === '/about' && req.method === "GET") {
        res.writeHead(200, { "content-type": "text.html" });
        res.end("<h1>ABOUT COLLEGE</h1><p>Erode Sengunthar Engineering College is situated in Erode in Tamil Nadu state of India. Established in 1996, ESEC is a Private UnAided college. The college is affiliated with Anna University and accredited by NBA, NAAC.</p>")
    }
    else if (parseUrl.pathname === "/contact" && req.method === "GET") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Contact</h1><p>Admission : Mail : admission@esec.ac.in, Mobile :9442132706, 9865279443, 9842465500, 9842865500. Official Mail Id : contact@esec.ac.in. Principal Mail Id : esecprincipal@gmail.com. Contact No. : 04294232701,702,703</p>")

    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>Sorry page not found</h1>")
    }
});
server.listen(5000, () => {
    console.log("Server is running in http://localhost:5000");
});