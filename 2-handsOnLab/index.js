const fs = require('fs').promises;
const crypto = require('crypto');

// Lê o arquivo JSON e retorna os dados como um objeto
const lerArquivo = async () => {
    try {
        const result = await fs.readFile('./data/usuarios.json', 'utf-8'); 
        return JSON.parse(result);
    } catch (error) {
        console.log('Erro ao ler o arquivo:', error);
        return []; // Retorna um array vazio em caso de erro
    }
};

// Grava os dados no arquivo JSON
const gravarArquivo = async (dados) => {
    try {
        const data = JSON.stringify(dados, null, 2); // Formatação melhorada
        await fs.writeFile('./data/usuarios.json', data);
    } catch (error) {
        console.log('Erro ao gravar o arquivo:', error);
    }
};

// Salva um novo usuário
const salvarUsuario = async (usuario) => {
    try {
        const listaUsuario = await lerArquivo(); 
        console.log('Usuários atuais:', listaUsuario);
        usuario.password = crypto
            .createHash("sha256") 
            .update(usuario.password)
            .digest('hex');
        console.log('Senha hashada:', usuario.password);
        listaUsuario.push(usuario);
        await gravarArquivo(listaUsuario); 
        console.log('Usuário salvo com sucesso!');
    } catch (error) {
        console.log('Erro ao salvar o usuário:', error);
    }
};

// Valida um usuário existente
const validarUsuario = async (usuario) => {
    const listaDeUsuario = await lerArquivo();
    const senhaCriptografada = crypto
        .createHash("sha256")
        .update(usuario.password)
        .digest('hex');

    const usuarioEncontrado = listaDeUsuario.find((user) => {
        return user.name === usuario.name && user.password === senhaCriptografada; 
    });
    
    console.log('Senha criptografada:', senhaCriptografada);

    if (usuarioEncontrado) {
        console.log('Usuário logado!');
    } else {
        console.log('Usuário não encontrado ou senha incorreta'); 
    }
};

// Função principal para executar o código
const main = async () => {
    await salvarUsuario({ name: 'joao', password: 'minhaSenha' }); // Exemplo de uso da função salvarUsuario
    await validarUsuario({ name: 'joao', password: 'minhaSenha' });
};

// Executa a função principal
main();
