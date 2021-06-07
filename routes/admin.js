// Chama módulo Express
const express = require('express');
// Chama módulo Multer (upload)
const multer = require('multer');
// Chama módulo Path (caminho de arquivos)
const path = require('path');
// Chama módulo/método que gerencia rotas
const router = express.Router();
// Chama o controller servicosController
const servicosController = require('../controllers/servicosController');
// Chama middleware - validação de serviço
const validacaCadastroServico = require('../middlewares/validacao/servico');

// Configurações do Multer
const storage = multer.diskStorage({
    // (A) Destino do upload
    destination: (req, file, cb) => {
        // Guarda arquivos na pasta /uploads
        cb(null, path.join('uploads'));
    },
    // (B) Nome do upload
    filename: (req, file, cb) => {
        // Salva arquivo com nome do campo + data e hora + extensão (pdf, doc)
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }
});

// Usando configuração como storage do multer
const upload = multer({ storage });

// Rotas para páginas administrativas
// A) MÉTODO GET
// (1) http://localhost:3000/admin
router.get('/', (req, res, next) => {
    res.render('admin', { titulo: 'Painel Administrativo' });
});
// (2) http://localhost:3000/admin/servicos
router.get('/servicos', servicosController.index);
// (3) http://localhost:3000/admin/servicos/cadastro
router.get('/servicos/cadastro', servicosController.cadastro);
// (4) http://localhost:3000/admin/servicos/editar
router.get('/servicos/editar/:id', servicosController.editar);

// B) MÉTODO POST
// (1) http://localhost:3000/admin/servicos/cadastro
router.post('/servicos/cadastro', upload.single('ilustracao'), validacaCadastroServico, servicosController.salvar);

// C) MÉTODO PUT
// (1) http://localhost:3000/admin/servicos/editar/:id/?_method=PUT
router.put('/servicos/editar/:id', upload.single('ilustracao'), servicosController.atualizar);

// D) MÉTODO DELETE
// (1) http://localhost:3000/admin/servicos/excluir
router.delete('/servicos/excluir/:id', upload.single('ilustracao'), servicosController.deletar);

// Exportando rotas a serem utilizadas
module.exports = router;