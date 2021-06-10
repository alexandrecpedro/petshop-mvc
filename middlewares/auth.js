// Importando módulo Express-Session
const session = require('express-session')

const auth = (request, response, next) => {
    // Verificar se existe a session usuarioLogado
    if (request.session.usuarioLogado) {
        // Se o usuário estiver logado: next()
        next()
    } else {
        // Se não estiver logado, redireciona para /login
        return response.redirect('/login')
    }
}

module.exports = auth