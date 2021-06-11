// Instalação de módulo 'fs' para manipulação de arquivos
const fs = require('fs')
// Módulo nativo para manipulação de arquivos
const path = require('path')

// Caminho do arquivo JSON
const usuariosPath = path.join('usuarios.json')
// Pegando conteúdo do arquivo JSON
let usuarios = fs.readFileSync(usuariosPath, { encoding: 'utf-8'})
// Convertendo arquivo JSON em um array - Método Parse
usuarios = JSON.parse(usuarios)

// Middleware - validação de cadastro de usuário
const usuario = (request, response, next) => {
    let {nome, email, senha} = request.body;
    // Busca se há email cadastrado pelo usuário
    const emailEncontrado = usuarios.find(emailUsuario => emailUsuario.email == email);

    if (nome.trim() == "" ||  email.trim() == "" || senha.trim() == "") {
        // Retorna mensagem de erro
        return response.send(`Preencha todos os campos obrigatórios!`);
        // response.render("servicoCadastro", { erro: 'Preencha todos os campos obrigatórios!' });
    } else if (emailEncontrado && emailEncontrado !== undefined) {
        return response.send(`Email já cadastrado`);
    } else if (nome.length < 1 || nome.length > 15) {
        return response.send(`Preencha os campos corretamente!`);
    } else if (nome.trim().split(' ').length < 2) {
        return response.send(`Preencha o nome completo`);
    } else {
        // Executa próxima função/controller
        next();
    }
}

module.exports = usuario;