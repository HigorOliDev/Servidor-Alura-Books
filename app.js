const express = require("express"); // para importar express
const rotaLivro = require("./rotas/livros");
const rotaFavorito = require('./rotas/favoritos')
const estanteLivros = require('./rotas/estante')
const cors = require("cors")

const app = express(); // para criar uma função do express
app.use(express.json()) // para o express entender o formato json do body da requisição
app.use(cors({origin: '*'})) // para permitir que o frontend acesse a api, mesmo estando em um domínio diferente

app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavorito);
app.use('/estante', estanteLivros);

const port = 8000 // para criar uma porta de url

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});