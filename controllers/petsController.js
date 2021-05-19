const petsController = {
    // métodos dentro do objeto
    // método INDEX - exibe a lista de pets
    index: (request, response) => {
        return response.send('Exibindo lista de pets');
    },
    // método SHOW - exibe informações de cada pet
    show: (request, response) => {
        // pegando parâmetro nome da rota 'pets/:nome'
        const {nome} = request.params;
        return response.send(`Exibindo detalhes do pet ${nome}`);
    }
}

module.exports = petsController