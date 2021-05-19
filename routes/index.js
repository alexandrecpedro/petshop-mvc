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

// Rota para '/pets' que retorna o método index da petsController
router.get('/pets', petsController.index)
// Rota para '/pets/:nome' que retorna o método show da petsController
router.get('/pets/:nome', petsController.show)

// Rota para '/servicos' que retorna o método index da servicosController
router.get('/servicos', servicosController.index)
// Rota para '/servicos/:nome' que retorna o método show da servicosController
router.get('/servicos/:nome', servicosController.show)

module.exports = router;
