let express = require('express');
let app = express();
app.set('view engine','ejs');
app.get("/",function(req,res){
    res.render("demo",{name:'Arshath'});
});
app.listen(6800,function(req,res){
    console.log("Running in localhost:6800");
});