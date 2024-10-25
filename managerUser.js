const fs = require('fs').promises;

class ManagerUser {
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
        return await this.#lerArquivo();
    }

    criarUsuario = async (nome, sobrenome, idade, curso) => {
        let resultado = await this.#lerArquivo();

        const user = {
            nome,
            sobrenome,
            idade,
            curso // Corrigido para "curso"
        };
        resultado.push(user);
        await this.#gravarUsuario(resultado);
    }
}

const main = async () => {
    const userManager = new ManagerUser("./data/usuarios.json");
    
    // Exemplo de como criar um novo usuário
    await userManager.criarUsuario("Josy", "Nascimento", 25, "Programação");

    // Consultando usuários
    const usuarios = await userManager.consultaUsuario();
    console.log(usuarios);
};

main().catch(err => console.error(err));
