const { Router } = require('express');
const { getFavoritos, postFavorito, deleteFavorito } = require('../controladores/favorito');


const router = Router()

/**
 * @swagger
 * /favoritos:
 *   get:
 *     summary: Lista todos os livros favoritos
 *     tags:
 *       - Favoritos
 *     responses:
 *       200:
 *         description: Lista de favoritos retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', getFavoritos)

/**
 * @swagger
 * /favoritos/{id}:
 *   post:
 *     summary: Adiciona um livro aos favoritos
 *     tags:
 *       - Favoritos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do livro que sera adicionado aos favoritos
 *     responses:
 *       201:
 *         description: Favorito inserido com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/:id', postFavorito)

/**
 * @swagger
 * /favoritos/{id}:
 *   delete:
 *     summary: Remove um livro dos favoritos
 *     tags:
 *       - Favoritos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do livro que sera removido dos favoritos
 *     responses:
 *       200:
 *         description: Favorito deletado com sucesso
 *       422:
 *         description: ID invalido
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/:id', deleteFavorito)

module.exports = router;
