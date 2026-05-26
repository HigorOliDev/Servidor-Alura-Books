const { Router } = require('express');
const { getELivros } = require('../controladores/estante');


const router = Router()

router.get('/', getELivros)

module.exports = router;