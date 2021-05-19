const institucionalController = {
    // métodos dentro do objeto para renderizar as views
    // método INDEX - renderiza
    index: (request, response) => {
        return response.render('index');
    }
}

module.exports = institucionalController