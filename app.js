const swaggerUi = require('swagger-ui-express'); // para criar pagina visual da documentação
const swaggerJsdoc = require('swagger-jsdoc'); // lê os comentarios @swagger
const express = require("express"); // para importar express
const rotaLivro = require("./rotas/livros");
const rotaFavorito = require('./rotas/favoritos');
const estanteLivros = require('./rotas/estante');
const cors = require("cors"); //ferramenta que bloqueia ou permite acessar outras urls exteriores



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


// configurando a OpenAPI para e documentação
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Alura Books Server API',
            version: '1.0.0',
            description: 'API para gerenciamento de livros, favoritos e estante'
        },
        servers: [
            {
                url: 'http://localhost:8000'
            }
        ]
    },
    apis: ['./rotas/*.js'] // diz para o Swagger procurar comentários de documentação dentro dos arquivos da pasta rotas.

}
 
const swaggerSpec = swaggerJsdoc(swaggerOptions) // cria uma variavel para armazenar as configurações do swagger

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // cria rota na web para interface visual do swagger
