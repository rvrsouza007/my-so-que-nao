const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/UsuariosController')

router.get('/create', UsuariosController.create);

module.exports = router;