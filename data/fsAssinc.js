const fs = require ('fs'.promise)

const operaçõesAssincronas = async( ) => {
    await fs.writeFle('./data/exemploPromises', 'Hello again, coders')
    const resultado = await fs.readFile('./data/exemploPromises.txt', 'utf-8');
    console.log(resultado);

    await

}