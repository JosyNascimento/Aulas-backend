const fs = require('fs').promises;

class ManagerUsers {
    constructor(path) {
        this.path = path;
    }

    #lerArquivo = async () => {
        const resultado = await fs.readFile(this.path, 'utf-8');
        const resultadoParsed = JSON.parse(resultado);
        return resultadoParsed;
    }

    #gravarUsuario = async (data) => {
        const dataToSave = JSON.stringify(data, null, 2); // Formatação
        await fs.writeFile(this.path, dataToSave);
    }

    consultaUsuario = async () => {
        const result = await this.#lerArquivo();
        return result
    }


    criarUsuario = async (nome, sobrenome, idade, curso) => {
        let resultado = await this.#lerArquivo();

        const user = {
            nome,
            sobrenome,
            idade,
            curso 
        };
        resultado.push(user);
        await this.#gravarUsuario(resultado);
    }
}

const main = async () => {
    const userManager = new ManagerUsers("./data/usuarios.json");
    await userManager.criarUsuario("Josy", "Nascimento", 25, "Programação");

    
    const user = await userManager.consultaUsuario();  // Consultando usuários
    console.log(user);
   
     // Exemplo de como criar um novo usuário

    
}

main().catch(err => console.error(err));
