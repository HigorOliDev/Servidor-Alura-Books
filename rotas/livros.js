const { Router } = require('express')
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require('../controladores/livro')

const router = Router()

/**
 * @swagger
 * /livros:
 *  get:
 *      summary: lista todos os livro
 *      tags:
 *          - Livros
 *      responses:
 *         200:
 *          description: Lista de livros retornada com sucesso
 *         500:
 *          description: erro interno do servidor
 */
router.get('/', getLivros)

/**
 * @swagger
 * /livros/{id}:
 *   get:
 *     summary: Busca um livro pelo ID
 *     tags:
 *       - Livros
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do livro
 *     responses:
 *       200:
 *         description: Livro encontrado
 *       422:
 *         description: ID inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/:id', getLivro)

/**
 * @swagger
 * /livros:
 *   post:
 *     summary: Cadastra um novo livro
 *     tags:
 *       - Livros
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - nome
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 4
 *               nome:
 *                 type: string
 *                 example: "Node.js para iniciantes"
 *     responses:
 *       201:
 *         description: Livro inserido com sucesso
 *       422:
 *         description: Campos "nome" e "id" são obrigatórios
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/', postLivro)

/**
 * @swagger
 * /livros/{id}:
 *   patch:
 *     summary: Atualiza parcialmente um livro
 *     tags:
 *       - Livros
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do livro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Livro atualizado"
 *     responses:
 *       200:
 *         description: Livro modificado com sucesso
 *       422:
 *         description: ID inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.patch('/:id', patchLivro)

/**
 * @swagger
 * /livros/{id}:
 *   delete:
 *     summary: Remove um livro pelo ID
 *     tags:
 *       - Livros
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do livro
 *     responses:
 *       200:
 *         description: Livro deletado com sucesso
 *       422:
 *         description: ID inválido
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/:id', deleteLivro)

module.exports = router;