const fs = require ('fs').promises;

const operacoesAssincronas = async() => {
    await fs.writeFile('./data/exemploPromises.txt', 'Hello again!, agora com promises')
    const resultado = await fs.readFile('./data/exemploPromises.txt', 'utf-8');
    console.log(resultado);

    await fs.appendFile('./data/exemploPromises.txt', '\nVamos estudar!')
}

console.log('antes da função');
operacoesAssincronas();
console.log('Depois da fnção');