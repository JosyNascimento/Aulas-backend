const axios = require("axios");

const fetch = async (de, para) => {
    try {
        const baseURL = "https://economia.awesomeapi.com.br/last/";
        const url = `${baseURL}${de}-${para}`; // Corrigido para usar crase
        console.log(url);
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.log(error);
    }
};

const main = async () => {
    try {
        const resposta = await fetch("USD", "BRL"); // Corrigido para "BRL"
        console.log(resposta);
        const dolar = Number(resposta.USDBRL.high); // Corrigido para 'high' (ou 'higt' se era intenção)
        console.log(`Um dólar equivale aproximadamente ${dolar.toFixed(2)} reais`); // Corrigido para usar crase
    } catch (error) {
        console.log(error);
    }
};

main(); // Não se esqueça de chamar a função main para executar o código
