const operacoesAsync =async () => {
    try {
        let resultado =await fstat.readFile("./data/data.json", "utf-8");
        console.log("antes", typeof resultado, resultado);

        const newUser ={
            id: 6,
            name: "Josy",
            cidade: "Rio"
        };
        resultadoParsed.push(newUser);
        console.log(resultadoParsed)
        
    }
}