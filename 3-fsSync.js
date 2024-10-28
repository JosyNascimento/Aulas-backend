const fs = require('fs');

fs.writeFileSync('./data/exemplo.txt', 'Hello! hoje estudaremos fsSync');

const exists= fs.existsSync('./data/exemplo.txt');
console.log(exists);

if (exists) fs.appendFileSync('./data/exemplo.txt', '\nagora vamos dar uma pausa!')
    
    fs.appendFileSync('./data/exemplo.txt', '\nMais conteudo!')
    let conteudo = fs.readFileSync('./data/exemplo.txt', 'utf-8');

    const users = 'Josy, Sérgio, Ernesto'

    fs.appendFileSync('./data/exemplo.txt', users)
    console.log(conteudo);

  


