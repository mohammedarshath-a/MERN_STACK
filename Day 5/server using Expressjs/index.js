import express from "express";
const app = express();
app.get("/", (req, res) => { res.send("<h1>Welcomme to Express home page</h1>"); });
app.get("/about", (req, res) => { res.send("<h1>Welcome to about page</h1>") });
app.use((req, res) => { res.status(404).send("<h1>UNAVAILABLE</h1>") });
app.listen(3000, () => {
    console.log("running in http://localhost:3000")
})