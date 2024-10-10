<h1>DevSchool</h1>
<br>
Este projeto é uma espécie de comunidade online onde usuários autenticados podem criar, editar e gerenciar artigos. O projeto consiste em uma aplicação front-end desenvolvida em Angular integrada a um back-end em Java usando Spring Boot, com autenticação JWT e persistência de dados utilizando JPA e MySQL.

<h2>Funcionalidades</h2>
<ul>
<li>Autenticação JWT: O projeto implementa um sistema de autenticação baseado em JWT (JSON Web Token), garantindo segurança e controle de acesso aos usuários autenticados.</li><br>
<li>Gerenciamento de artigos: Usuários podem criar, editar, visualizar e excluir artigos.</li><br>
<li>Sistema de usuários: Cada usuário pode se cadastrar, fazer login e gerenciar seus próprios artigos.</li><br>
<li>Integração Front-end e Back-end: O front-end Angular consome a API REST desenvolvida em Java com Spring Boot.</li><br>
<li>Persistência de dados: Utilização de JPA com banco de dados MySQL para armazenamento e gerenciamento de dados.</li><br>
<li>Interface responsiva: O layout foi projetado para se adaptar a diferentes tamanhos de tela, proporcionando uma experiência de usuário consistente em dispositivos móveis e desktops.</li>
<br>
</ul>
<br>
<h2>Tecnologias Utilizadas</h2>
<h3>Front-end</h3>
Angular: Framework front-end para desenvolvimento de SPAs (Single Page Applications).
HTML5, CSS3 e TypeScript: Linguagens utilizadas para construir e estilizar a interface do usuário.
Angular Router: Navegação entre as páginas de forma dinâmica e eficiente.
<h3>Back-end</h3>
<ul>
  <li>Java: Linguagem de programação para o desenvolvimento da API.</li>
  <li>Spring Boot: Framework utilizado para construir a aplicação back-end com foco em microsserviços.</li>
  <li>Spring Security: Implementação da autenticação e autorização via JWT.</li>
  <li>JPA/Hibernate: Persistência de dados com banco de dados MySQL.</li>
  <li>MySQL: Banco de dados relacional utilizado para armazenar os dados dos usuários e artigos.</li>
</ul>
<h2>Estrutura de Pastas</h2>
<br>
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

<h2>Endpoints da API</h2>
<h3>Autenticação</h3>
POST /api/auth/login: Autentica o usuário e retorna um token JWT.
POST /api/auth/register: Registra um novo usuário.
Artigos
GET /api/articles: Retorna a lista de artigos.
GET /api/articles/{id}: Retorna os detalhes de um artigo específico.
POST /api/articles: Cria um novo artigo (necessário autenticação).
PUT /api/articles/{id}: Atualiza um artigo existente (necessário autenticação).
DELETE /api/articles/{id}: Exclui um artigo (necessário autenticação).
<br>
<h2>Contribuição</h2>
Se você deseja contribuir para este projeto, fique à vontade para abrir uma issue ou enviar um pull request.
