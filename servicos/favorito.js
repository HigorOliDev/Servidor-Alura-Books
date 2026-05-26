const fs = require('fs');

function getTodosFavoritos(req, res){
    return JSON.parse( fs.readFileSync('favoritos.json'))
}

function deletaFavoritoPorId(id){
    let favoritosAtuais = JSON.parse(fs.readFileSync('favoritos.json'))
 
    const favoritosFiltrado = favoritosAtuais.filter(favorito => favorito.id !== id)
    fs.writeFileSync('favoritos.json', JSON.stringify(favoritosFiltrado))
}

function insereFavorito(favoritoNovo){
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))

    const livroInserido = livros.find(livro => livro.id === favoritoNovo)

    const novaListaDeFavoritos = [...favoritos, livroInserido ]

    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaDeFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito,
}
