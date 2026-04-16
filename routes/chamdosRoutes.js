const express = require('express');
const router = express.Router();
const controller = require('../controller/chamadosController');

const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, controller.criarChamado);
router.get('/', authMiddleware, controller.listarChamado);
router.get('/:id', authMiddleware, controller.buscarChamado);
router.put('/:id', authMiddleware, controller.atualizarChamado);
router.delete('/:id', authMiddleware, controller.deletarChamado);

module.exports = router;