// Instalação de módulo 'fs' para manipulação de arquivos
const fs = require('fs')
// Módulo nativo para manipulação de arquivos
const path = require('path')
// Instalação de módulo 'uuidv4' para gerar ID
const { uuid } = require('uuidv4')

// Caminho do arquivo JSON
const servicosPath = path.join('servicos.json')
// Pegando conteúdo do arquivo JSON
let servicos = fs.readFileSync(servicosPath, { encoding: 'utf-8'})
// Convertendo arquivo JSON em um array - Método Parse
servicos = JSON.parse(servicos)

const servicosController = {
    // métodos dentro do objeto
    // método INDEX - exibe a lista dos servicos
    index: (request, response) => {
        // Renderiza a view adminServicos e passa informações dinâmicas
        return response.render('adminServicos', { titulo: 'Serviços', servicos })
    },
    cadastro: (request, response) => {
        return response.render('servicosCadastro', { titulo: 'Cadastrar Serviço' })
    },
    // método SALVAR - recebe informações enviadas e as salva
    salvar: (request, response) => {
        let { nome, descricao, preco } = request.body

        // Pegando o nome do arquivo (upload)
        let ilustracao = request.file.filename
        // Adiciona o novo serviço no array
        servicos.push({ id: uuid(), nome, descricao, preco, ilustracao })
        // Converter o array para json
        let dadosJson = JSON.stringify(servicos)
        // Salva json atualizado no arquivo
        fs.writeFileSync(servicosPath, dadosJson)
        
        // Redireciona para a lista de serviços
        return response.redirect('/admin/servicos')
    },
    // método EDITAR - altera informações de cada serviço
    editar: (request, response) => {
        // Pegando parâmetro ID da URL
        let { id } = request.params
        // Busca serviço pelo ID
        let servicoEncontrado = servicos.find(servico => servico.id == id)
        // Renderiza view e manda título e objeto do serviço
        return response.render('servicosEditar', { titulo: 'Editar Serviço', servico: servicoEncontrado })
    },
    // método ATUALIZAR
    atualizar: (request, response) => {
        // Pegando parâmetro ID da URL
        let { id } = request.params
        // Pegando informações do formulário
        let { nome, descricao, preco } = request.body
        // Busca serviço pelo ID
        let servicoEncontrado = servicos.find(servico => servico.id == id)
        // Atribuindo os novos valores ao servicoEncontrado
        servicoEncontrado.nome = nome;
        servicoEncontrado.descricao = descricao;
        servicoEncontrado.preco = preco;
        // Verificando se usuário subiu um novo arquivo (nova imagem)
        if (request.file) {
            servicoEncontrado.ilustracao = request.file.filename
        }

        // Converter o array para json
        let dadosJson = JSON.stringify(servicos)
        // Salva json atualizado no arquivo
        fs.writeFileSync(servicosPath, dadosJson)
        
        // Redireciona para a lista de serviços
        return response.redirect('/admin/servicos')
    },
    deletar: (request, response) => {
        // Pegando parâmetro ID da URL
        let { id } = request.params
        // Busca serviço pelo ID
        let servicoIndex = servicos.findIndex(servico => servico.id == id)
        servicos.splice(servicoIndex, 1)

        // Converter o array para json
        let dadosJson = JSON.stringify(servicos)
        // Salva json atualizado no arquivo
        fs.writeFileSync(servicosPath, dadosJson)
        
        // Redireciona para a lista de serviços
        return response.redirect('/admin/servicos')
    }
}

module.exports = servicosController