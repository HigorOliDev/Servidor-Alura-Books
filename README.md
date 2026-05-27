# Backend de um Projeto de Livros

API desenvolvida em JavaScript para gerenciar um banco de dados de livos, premite adicionar, remover e listar livros 

## Funcionalidades

Livros

Listar todos os livros: GET /livros
Buscar um livro pelo id: GET /livros/:id
Cadastrar um novo livro: POST /livros
Atualizar dados de um livro: PATCH /livros/:id
Deletar um livro: DELETE /livros/:id
Favoritos

Listar todos os livros favoritos: GET /favoritos
Adicionar um livro aos favoritos pelo id: POST /favoritos/:id
Remover um livro dos favoritos pelo id: DELETE /favoritos/:id
Estante

Listar os livros da estante: GET /estante
Além disso, o sistema:

Usa arquivos .json como base de dados.
Permite acesso do frontend com cors.
Recebe dados em JSON com express.json().
Roda na porta 8000.

## Tecnologias utilizadas

- JavaScript: Linguagem utilizada
- Express: cria o servidor e as rotas da API.
- Cors: permite o frontend acessar o backend em outra porta/domínio.
- nodemon: reinicia o servidor automaticamente quando você altera arquivos.
- Postman: permite realizar testes para verificar retornos

## Como executar o projeto

1. Clone o repositório:

No terminal:
````
git clone https://github.com/HigorOliDev/Servidor-Alura-Books.git
````
3. Acesse a pasta do projeto

No terminal:
````
cd meu-projeto
````
3. Instale a dependencias

No terminal: npm install
````
express
cors
nodemon
````
4. Execute no terminal: para iniciar o projeto
   ````
   npx nodemon app.js
## O projeto será aberto em http://localhost:3000

## Estrutura do projeto
````
alura-books-server/
├── app.js
├── package.json
├── package-lock.json
├── README.md
├── livros.json
├── favoritos.json
├── controladores/
│   ├── livro.js
│   ├── favorito.js
│   └── estante.js
├── rotas/
│   ├── livros.js
│   ├── favoritos.js
│   └── estante.js
└── servicos/
    ├── livros.js
    ├── favorito.js
    └── estante.js
`````
Resumo do papel de cada parte:

app.js: arquivo principal do servidor Express.
rotas/: define os endpoints, tipo /livros e /favoritos.
controladores/: recebe a requisição e monta a resposta.
servicos/: contém a lógica de leitura, busca, inserção e remoção dos dados.
livros.json: funciona como “banco de dados” dos livros.
favoritos.json: guarda os livros favoritados.
package.json: configura dependências e informações do projeto.

## Sobre o projeto
Este projeto foi criado com o objetivo de praticar conceitos de React, como componentização, rotas, consumo de API, estado e renderização de listas. **Observação: para funcionamento completo do projeto é necessário a parte Front-end localizado em outro repositório.**



