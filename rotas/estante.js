const { Router } = require('express');
const { getELivros } = require('../controladores/estante');


const router = Router()

/**
 * @swagger
 * /estante:
 *   get:
 *     summary: Lista os livros da estante
 *     tags:
 *       - Estante
 *     responses:
 *       200:
 *         description: Lista de livros da estante retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', getELivros)

module.exports = router;
