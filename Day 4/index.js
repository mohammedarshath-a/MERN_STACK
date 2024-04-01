import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";
import { error } from "console";
inquirer
    .prompt([{
        message: "paste url",
        name: "URL",
    }])
    .then((answers) => {
        const url = answers.URL;
        console.log(url);
        var qrimage = qr.image(url, { type: 'png' });
        qrimage.pipe(fs.createWriteStream("weburl.png"));
        fs.writeFile("URLText1.txt", url, (error, data) => {
            if (error) throw error;
            data = url;
            console.log("Saved");
            console.log(data);
        })
        if (sucess) {
        }
        else if (error) { }
        fs.close();
    })
    .catch((error) => {
        if (error.isTryError) {
        }
        else {
        }
    })
