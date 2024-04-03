const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets', 'img', 'flower')));
app.get("/", async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});
app.get("/about", async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
app.get("/contact", async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});
app.listen(8050, () => {
    console.log("RUNNING IN localhost:8050");
});

