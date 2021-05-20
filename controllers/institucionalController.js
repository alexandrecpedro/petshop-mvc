const institucionalController = {
    // métodos dentro do objeto para renderizar as views
    // método INDEX - renderiza
    index: (request, response) => {
        return response.render('index', { titulo: 'Home' });
    },
    sobre: (request, response) => {
        return response.render('sobre', { titulo: 'Sobre' });
    },
    contato: (request, response) => {
        return response.render('contato', { titulo: 'Contato' });
    }
}

module.exports = institucionalController