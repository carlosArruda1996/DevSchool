myBlog
Este projeto é um blog pessoal onde usuários autenticados podem criar, editar e gerenciar artigos. O projeto consiste em uma aplicação front-end desenvolvida em Angular integrada a um back-end em Java usando Spring Boot, com autenticação JWT e persistência de dados utilizando JPA e MySQL.

Funcionalidades
Autenticação JWT: O projeto implementa um sistema de autenticação baseado em JWT (JSON Web Token), garantindo segurança e controle de acesso aos usuários autenticados.
Gerenciamento de artigos: Usuários podem criar, editar, visualizar e excluir artigos.
Sistema de usuários: Cada usuário pode se cadastrar, fazer login e gerenciar seus próprios artigos.
Integração Front-end e Back-end: O front-end Angular consome a API REST desenvolvida em Java com Spring Boot.
Persistência de dados: Utilização de JPA com banco de dados MySQL para armazenamento e gerenciamento de dados.
Interface responsiva: O layout foi projetado para se adaptar a diferentes tamanhos de tela, proporcionando uma experiência de usuário consistente em dispositivos móveis e desktops.
Tecnologias Utilizadas
Front-end
Angular: Framework front-end para desenvolvimento de SPAs (Single Page Applications).
HTML5, CSS3 e TypeScript: Linguagens utilizadas para construir e estilizar a interface do usuário.
Angular Router: Navegação entre as páginas de forma dinâmica e eficiente.
Back-end
Java: Linguagem de programação para o desenvolvimento da API.
Spring Boot: Framework utilizado para construir a aplicação back-end com foco em microsserviços.
Spring Security: Implementação da autenticação e autorização via JWT.
JPA/Hibernate: Persistência de dados com banco de dados MySQL.
MySQL: Banco de dados relacional utilizado para armazenar os dados dos usuários e artigos.
Estrutura de Pastas
bash
Copiar código
myBlog/
├── backend/                # Aplicação Java com Spring Boot (API)
│   ├── src/main/java/com/example/myblog/
│   │   ├── controller/     # Controladores da API REST
│   │   ├── model/          # Entidades JPA (User, Article, etc.)
│   │   ├── repository/     # Interfaces de persistência de dados (JPA Repositories)
│   │   ├── service/        # Serviços da aplicação
│   │   └── config/         # Configurações de segurança e JWT
│   └── src/main/resources/ # Arquivos de configuração (application.properties)
├── frontend/               # Aplicação Angular (SPA)
│   ├── src/app/
│   │   ├── components/     # Componentes Angular (Header, Footer, ArticleList, etc.)
│   │   ├── services/       # Serviços Angular (Autenticação, CRUD de artigos, etc.)
│   │   └── models/         # Modelos de dados (Article, User, etc.)
└── README.md               # Arquivo de documentação do projeto
Imagens do Projeto
Página Inicial

Página de Login

Dashboard de Artigos

Endpoints da API
Autenticação
POST /api/auth/login: Autentica o usuário e retorna um token JWT.
POST /api/auth/register: Registra um novo usuário.
Artigos
GET /api/articles: Retorna a lista de artigos.
GET /api/articles/{id}: Retorna os detalhes de um artigo específico.
POST /api/articles: Cria um novo artigo (necessário autenticação).
PUT /api/articles/{id}: Atualiza um artigo existente (necessário autenticação).
DELETE /api/articles/{id}: Exclui um artigo (necessário autenticação).
Como Rodar o Projeto
Backend (Spring Boot)
Clone o repositório:
bash
Copiar código
git clone https://github.com/carlosArruda1996/myBlog
Navegue até a pasta backend e configure o arquivo application.properties com as informações do seu banco de dados MySQL:
properties
Copiar código
spring.datasource.url=jdbc:mysql://localhost:3306/myblogdb
spring.datasource.username=seu-usuario
spring.datasource.password=sua-senha
Execute o comando:
bash
Copiar código
mvn spring-boot:run
Frontend (Angular)
Navegue até a pasta frontend e instale as dependências:
bash
Copiar código
npm install
Inicie o servidor Angular:
bash
Copiar código
ng serve
Acesse o site no endereço http://localhost:4200.
Contribuição
Se você deseja contribuir para este projeto, fique à vontade para abrir uma issue ou enviar um pull request.
