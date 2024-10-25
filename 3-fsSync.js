const fs = require('fs');

fs.writeFileSync('./data/exemplo.txt', 'Hello, coders!');

const exists= fs.existsSync('./data/exemplo.txt');
console.log(exists);

if (exists) fs.appendFileSync('./data/exemplo.txt', 'agora conteudo novo!')
    
    fs.appendFileSync('./data/exemplo.txt', 'mais conteudo!')
    let conteudo = fs.readFileSync('./data/exemplo.txt', 'utf-8');
    console.log(conteudo);

  


