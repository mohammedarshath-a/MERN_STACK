const fstream = require("fs");
fstream.readFile("re.txt","utf-8",(error,data)=>{
    if  (error){
        console.log("Error")
    }
    console.log(data);
})
