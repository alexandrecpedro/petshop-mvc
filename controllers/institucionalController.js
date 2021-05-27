const institucionalController = {
    // métodos dentro do objeto para renderizar as views
    // método INDEX - renderiza
    index: (request, response) => {
        return response.render('index', { titulo: 'Home' });
    },
    sobre: (request, response) => {
        return response.render('sobre', { titulo: 'Sobre' });
    },
    servicos: (request, response) => {
        return response.render('servicos', { titulo: 'Serviços' });
    },
    contato: (request, response) => {
        return response.render('contato', { titulo: 'Contato' });
    }
}

module.exports = institucionalController