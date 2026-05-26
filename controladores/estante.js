const {getEstanteLivros} = require('../servicos/estante')


function getELivros(req, res) {
    try{
        const livros = getEstanteLivros()
        res.send(livros)
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getELivros
}