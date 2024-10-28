const fs = require("fs");

fs.writeFile(
    "./data/exemploCallback.txt",
    "Hello world! we are here!",
    (err) => {
        if (err) {
            return console.log("1-Errou!", err);
        }
        // Read the file after writing
        fs.readFile("./data/exemploCallback.txt", "utf-8", (err, resultado) => {
            if (err) {
                return console.log("-2 errou!", err);
            }
            console.log(resultado);

            // Append to the file
            fs.appendFile("./data/exemploCallback.txt", " Mais felicidade", (err) => {
                if (err) {
                    return console.log("3-Mais vida", err);
                }

                // Read the file again after appending
                fs.readFile("./data/exemploCallback.txt", "utf-8", (err, resultado) => {
                    if (err) {
                        return console.log("4- vida", err);
                    }
                    console.log(resultado);
                });
            });
        });
    }
);
