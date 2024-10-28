const fs = require('fs');

const operacoesAsync = async () => {
    try {
        let resultado = await fs.promises.readFile('./data/data.json', 'utf-8');
        const resultadoParsed = JSON.parse(resultado);

        const newUser = {
            "id": 6,
            "name": "Sandra",
            "cidade": "Santos",
        };

        resultadoParsed.push(newUser);
        console.log(resultadoParsed);

        const dataToSave = JSON.stringify(resultadoParsed); 
        console.log(dataToSave);
        
        await fs.promises.writeFile("./data/data.json", dataToSave); 
    } catch (error) {
        console.log("error", error);
    }
};

// Chame a função para executá-la
operacoesAsync();
