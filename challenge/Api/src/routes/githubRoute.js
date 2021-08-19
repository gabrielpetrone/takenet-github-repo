// REST API
const express = require('express');

// Rotas da API
const router = express.Router();

// Funções da API
controller = require('../controllers/githubController');

// Subir Endpoint GET
router.get('/takenetgithub', async(req, res) => {
   res.send(await controller.takenetgh());
});

module.exports = router;