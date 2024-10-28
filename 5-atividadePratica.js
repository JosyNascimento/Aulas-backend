const fs = require('fs');

const date = JSON.stringify(new Date);
console.log(date);

// Escrevendo a data em um arquivo
fs.writeFile('./data/dataHora.txt', date, (err) => {
    if (err) {
        return console.log('Erro:', err);
    }
    console.log('Data e hora salvas em dataHora.txt');

    // Lendo o arquivo
    fs.readFile('./data/dataHora.txt', 'utf-8', (err, resultado) => {
        if (err) {
            return console.log('Erro ao ler o arquivo:', err);
        }
        console.log('Conteúdo do arquivo:', resultado);
    });
});
