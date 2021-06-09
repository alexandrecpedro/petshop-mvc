// Instalação de módulo 'fs' para manipulação de arquivos
const fs = require('fs')
// Módulo nativo para manipulação de arquivos
const path = require('path')

// Caminho do arquivo JSON
const servicosPath = path.join('servicos.json')
// Pegando conteúdo do arquivo JSON
let servicos = fs.readFileSync(servicosPath, { encoding: 'utf-8'})
// Convertendo arquivo JSON em um array - Método Parse
servicos = JSON.parse(servicos)

const institucionalController = {
    // métodos dentro do objeto para renderizar as views
    // método INDEX - renderiza
    index: (request, response) => {
        return response.render('index', { titulo: 'Home' });
    },
    sobre: (request, response) => {
        return response.render('sobre', { titulo: 'Sobre' });
    },
    // método SERVIÇOS 
    servicos: (request, response) => {
        // Renderiza a view Serviços e passa título e lista de serviços cadastrados
        return response.render('servicos', { titulo: 'Serviços', servicos });
    },
    contato: (request, response) => {
        return response.render('contato', { titulo: 'Contato' });
    },
    login: (request, response) => {
        return response.render('login', { titulo: 'Login' });
    },
    cadastro: (request, response) => {
        return response.render('cadastro', { titulo: 'Cadastre-se' });
    }
}

module.exports = institucionalController