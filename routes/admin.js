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
const validaCadastroServico = require('../middlewares/validacao/servico');
// Chama middleware - validação de usuário
const validaLogin = require('../middlewares/auth');

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
// A) MÉTODO USE
router.use(validaLogin);

// B) MÉTODO GET
// (1) http://localhost:3000/admin
router.get('/', servicosController.painel);
// (2) http://localhost:3000/admin/servicos
router.get('/servicos', servicosController.index);
// (3) http://localhost:3000/admin/servicos/cadastro
router.get('/servicos/cadastro', servicosController.cadastro);
// (4) http://localhost:3000/admin/servicos/editar
router.get('/servicos/editar/:id', servicosController.editar);
// (5) http://localhost:3000/admin/servicos/excluir/:id
router.get('/servicos/excluir/:id', servicosController.excluir);

// C) MÉTODO POST
// (1) http://localhost:3000/admin/servicos/cadastro
router.post('/servicos/cadastro', upload.single('ilustracao'), validaCadastroServico, servicosController.salvar);

// D) MÉTODO PUT
// (1) http://localhost:3000/admin/servicos/editar/:id/?_method=PUT
router.put('/servicos/editar/:id', upload.single('ilustracao'), validaCadastroServico, servicosController.atualizar);

// E) MÉTODO DELETE
// (1) http://localhost:3000/admin/servicos/excluir/:id
router.delete('/servicos/excluir/:id', servicosController.deletar);

// Exportando rotas a serem utilizadas
module.exports = router;