const fstream = require("fs");
fstream.writeFile("re.txt","Arshath file",(error)=>{
    if (error){
        console.log("Error")
    }
    console.log("Written");
})