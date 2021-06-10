const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController')
const servicosController = require('../controllers/servicosController')
const institucionalController = require('../controllers/institucionalController')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Petshop' });
// });

// Rotas para páginas institucionais (Trabalhe Conosco, Sobre, etc)
// (1) http://localhost:3000/
router.get('/', institucionalController.index)
// (2) http://localhost:3000/sobre
router.get('/sobre', institucionalController.sobre);
// (3) http://localhost:3000/contato
router.get('/contato', institucionalController.contato)
// (4) Rota para '/servicos' que retorna o método servicos da institucionalController
router.get('/servicos', institucionalController.servicos)
// (5) http://localhost:3000/login
router.get('/login', institucionalController.login);
// (6) http://localhost:3000/cadastro
router.get('/cadastro', institucionalController.cadastro);



module.exports = router;
