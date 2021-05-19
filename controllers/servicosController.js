const servicosController = {
    // métodos dentro do objeto
    // método INDEX - exibe a lista dos servicos
    index: (request, response) => {
        return response.send('Exibindo lista de serviços')
    },
    // método SHOW - exibe informações de cada pet
    show: (request, response) => {
        // pegando parâmetro nome da rota 'pets/:nome'
        const {nome} = request.params;
        return response.send(`Exibindo detalhes do serviço ${nome}`);
    }
}

module.exports = servicosController