const fs = require('fs');

function getEstanteLivros(res, req){
    return JSON.parse( fs.readFileSync('livros.json'))

}

module.exports = {
    getEstanteLivros,
}