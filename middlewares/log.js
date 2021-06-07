// Importar módulo FS
const fs = require('fs');

const log = (request, response, next) => {
    // Adicionando um novo conteúdo ao arquivo - caso 'log.txt' não exista, ele criará automaticamente
    fs.appendFileSync('log.txt', `O usuário acessou a url: ${request.url} \n`);
    // Executa a próxima função (controller)
    next();
}

// Exporta o middleware
module.exports = log;